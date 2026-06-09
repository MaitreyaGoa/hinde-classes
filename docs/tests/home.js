// home.js — Hinde Classes Portal
// Each standard = separate section, subjects = filter tabs inside
// Load order in index.html: <script src="config.js"></script> <script src="home.js"></script>

document.addEventListener("DOMContentLoaded", function () {
  renderTestsGrid();
});

// ══ STANDARD CONFIG ═══════════════════════════════════════
var STANDARDS = [
  {
    key: "std5", section: "c56", classNum: "5",
    label: "Standard 5", icon: "📓",
    subjects: ["Maths","Science","English"]
  },
  {
    key: "std6", section: "c56", classNum: "6",
    label: "Standard 6", icon: "📔",
    subjects: ["Maths","Science","English"]
  },
  {
    key: "std7", section: "c78", classNum: "7",
    label: "Standard 7", icon: "📒",
    subjects: ["Maths","Science","English","Social Science"]
  },
  {
    key: "std8", section: "c78", classNum: "8",
    label: "Standard 8", icon: "📙",
    subjects: ["Maths","Science","English","Social Science"]
  },
  {
    key: "std9", section: "c910", classNum: "9",
    label: "Standard 9", icon: "📗",
    subjects: ["Maths","Science","English","Social Science"]
  },
  {
    key: "std10", section: "c910", classNum: "10",
    label: "Standard 10", icon: "📘",
    subjects: ["Maths","Science","English","Social Science"]
  },
  {
    key: "std11", section: "c1112", classNum: "11",
    label: "Standard 11", icon: "📕",
    subjects: ["Maths","Physics","Chemistry","Biology","English"]
  },
  {
    key: "std12", section: "c1112", classNum: "12",
    label: "Standard 12", icon: "📕",
    subjects: ["Maths","Physics","Chemistry","Biology","English"]
  }
];

// ══ MAIN RENDER ═══════════════════════════════════════════
function renderTestsGrid() {
  var grid = document.getElementById("testsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  appendDailyTests(grid);

  STANDARDS.forEach(function (std) {
    appendStandardSection(grid, std);
  });

  appendOlympiadSection(grid);
  appendScholarshipSection(grid);
}

// ══ DAILY QUIZ ════════════════════════════════════════════
function appendDailyTests(grid) {
  var tests = getAllTests().filter(function (t) { return t.section === "daily"; });

  appendSectionHeader(grid, "📅", "Daily Quiz", "10 questions · 10 minutes · Mixed subjects · Free for all");

  var wrap = makePanelWrap();

  if (!tests.length) {
    wrap.innerHTML = '<p class="hc-empty">No daily quizzes yet. Check back tomorrow!</p>';
    grid.appendChild(wrap);
    return;
  }

  tests.sort(function (a, b) { return b.id > a.id ? 1 : -1; });

  var dateMap = {};
  var dateOrder = [];
  tests.forEach(function (t) {
    var m = t.id.match(/hc_(\d{4})(\d{2})(\d{2})/);
    var key = m ? (m[1] + "-" + m[2] + "-" + m[3]) : "other";
    if (!dateMap[key]) { dateMap[key] = []; dateOrder.push(key); }
    dateMap[key].push(t);
  });

  var today = getTodayStr();

  function fmtDate(d) {
    if (d === "other") return "Other";
    var mo = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var p = d.split("-");
    return p[2] + " " + mo[+p[1]-1] + " " + p[0];
  }

  var tabsHtml = '<div class="hc-tabs" id="dailyTabs">';
  dateOrder.forEach(function (d, i) {
    tabsHtml += '<button class="hc-tab' + (i===0?" active":"") + '" '
              + 'onclick="showDailyTab(\'' + d + '\',this)">'
              + (d===today ? "🔴 Today" : fmtDate(d)) + '</button>';
  });
  tabsHtml += '</div>';

  var panelsHtml = "";
  dateOrder.forEach(function (d, i) {
    var rows = dateMap[d].map(buildTestRow).join("");
    panelsHtml += '<div id="dtp_' + d + '" class="hc-panel' + (i>0?" hc-hidden":"") + '">'
                + '<div class="hc-list">' + rows + '</div></div>';
  });

  wrap.innerHTML = tabsHtml + panelsHtml;
  grid.appendChild(wrap);
}

function showDailyTab(date, btn) {
  document.querySelectorAll("[id^='dtp_']").forEach(function(p){ p.classList.add("hc-hidden"); });
  document.getElementById("dailyTabs").querySelectorAll(".hc-tab")
    .forEach(function(t){ t.classList.remove("active"); });
  var p = document.getElementById("dtp_" + date);
  if (p) p.classList.remove("hc-hidden");
  btn.classList.add("active");
}

// ══ STANDARD SECTION ══════════════════════════════════════
function appendStandardSection(grid, std) {
  var allTests = getAllTests().filter(function (t) {
    return t.section === std.section
      && (t.class === std.classNum || t.class === "all");
  });

  appendSectionHeader(grid, std.icon, std.label, std.subjects.join(" · "));

  var wrap = makePanelWrap();
  var uid  = std.key;

  // Tabs: All + each subject
  var tabsHtml = '<div class="hc-tabs" id="tabs_' + uid + '">';
  tabsHtml += '<button class="hc-tab active" onclick="showStdTab(\'' + uid + '\',\'all\',this)">📚 All</button>';
  std.subjects.forEach(function (subj) {
    tabsHtml += '<button class="hc-tab" onclick="showStdTab(\'' + uid + '\',\'' + escKey(subj) + '\',this)">'
              + subjIcon(subj) + ' ' + subj + '</button>';
  });
  tabsHtml += '</div>';

  // All panel
  var allRows = allTests.length
    ? allTests.map(buildTestRow).join("")
    : '<p class="hc-empty">Tests for ' + std.label + ' are coming soon!</p>';

  var panelsHtml = '<div id="panel_' + uid + '_all" class="hc-panel">'
                 + '<div class="hc-list">' + allRows + '</div></div>';

  // Subject panels
  std.subjects.forEach(function (subj) {
    var filtered = allTests.filter(function (t) {
      return normalise(t.subject) === normalise(subj);
    });
    var rows = filtered.length
      ? filtered.map(buildTestRow).join("")
      : '<p class="hc-empty">' + subj + ' tests for ' + std.label + ' coming soon!</p>';

    panelsHtml += '<div id="panel_' + uid + '_' + escKey(subj) + '" class="hc-panel hc-hidden">'
                + '<div class="hc-list">' + rows + '</div></div>';
  });

  wrap.innerHTML = tabsHtml + panelsHtml;
  grid.appendChild(wrap);
}

function showStdTab(uid, subj, btn) {
  document.querySelectorAll("[id^='panel_" + uid + "_']")
    .forEach(function(p){ p.classList.add("hc-hidden"); });
  document.getElementById("tabs_" + uid).querySelectorAll(".hc-tab")
    .forEach(function(t){ t.classList.remove("active"); });
  var panel = document.getElementById("panel_" + uid + "_" + subj);
  if (panel) panel.classList.remove("hc-hidden");
  btn.classList.add("active");
}

// ══ OLYMPIAD SECTION ══════════════════════════════════════
function appendOlympiadSection(grid) {
  var mathTests = getAllTests().filter(function(t){ return t.section==="olm"; });
  var sciTests  = getAllTests().filter(function(t){ return t.section==="olsci"; });
  if (!mathTests.length && !sciTests.length) return;

  appendSectionHeader(grid, "🏆", "Olympiad Training", "IMO · NSO · IMAS · SOF · All standards");

  var wrap = makePanelWrap();

  var tabsHtml = '<div class="hc-tabs" id="olmTabs">'
    + '<button class="hc-tab active" onclick="showOlmTab(\'maths\',this)">📐 Maths — IMO</button>'
    + '<button class="hc-tab" onclick="showOlmTab(\'science\',this)">🔬 Science — NSO</button>'
    + '</div>';

  var mathRows = mathTests.length
    ? mathTests.map(buildTestRow).join("")
    : '<p class="hc-empty">Maths Olympiad tests coming soon!</p>';
  var sciRows = sciTests.length
    ? sciTests.map(buildTestRow).join("")
    : '<p class="hc-empty">Science Olympiad tests coming soon!</p>';

  wrap.innerHTML = tabsHtml
    + '<div id="olm_maths" class="hc-panel"><div class="hc-list">' + mathRows + '</div></div>'
    + '<div id="olm_science" class="hc-panel hc-hidden"><div class="hc-list">' + sciRows + '</div></div>';

  grid.appendChild(wrap);
}

function showOlmTab(subj, btn) {
  ["maths","science"].forEach(function(s){
    var p=document.getElementById("olm_"+s); if(p) p.classList.add("hc-hidden");
  });
  document.getElementById("olmTabs").querySelectorAll(".hc-tab")
    .forEach(function(t){ t.classList.remove("active"); });
  var p=document.getElementById("olm_"+subj);
  if(p) p.classList.remove("hc-hidden");
  btn.classList.add("active");
}

// ══ SCHOLARSHIP SECTION ═══════════════════════════════════
function appendScholarshipSection(grid) {
  var tests = getAllTests().filter(function(t){ return t.section==="scholar"; });
  if (!tests.length) return;

  appendSectionHeader(grid, "🏅", "Scholarship & NTSE", "State Scholarship · NTSE · Class 5–10");

  var wrap = makePanelWrap();
  var classes = ["5","6","7","8","9","10"];
  var icons   = {"5":"📓","6":"📔","7":"📒","8":"📙","9":"📗","10":"📘"};

  var tabsHtml = '<div class="hc-tabs" id="scTabs">';
  classes.forEach(function(cls,i){
    tabsHtml += '<button class="hc-tab'+(i===0?" active":"")+ '" '
              + 'onclick="showScTab(\'' + cls + '\',this)">'
              + icons[cls]+' Class '+cls+'</button>';
  });
  tabsHtml += '</div>';

  var panelsHtml = "";
  classes.forEach(function(cls,i){
    var clsTests = tests.filter(function(t){ return t.class===cls; });
    var rows = clsTests.length
      ? clsTests.map(buildTestRow).join("")
      : '<p class="hc-empty">Scholarship tests for Class '+cls+' coming soon!</p>';
    panelsHtml += '<div id="sc_'+cls+'" class="hc-panel'+(i>0?" hc-hidden":"")+'"><div class="hc-list">'+rows+'</div></div>';
  });

  wrap.innerHTML = tabsHtml + panelsHtml;
  grid.appendChild(wrap);
}

function showScTab(cls, btn) {
  ["5","6","7","8","9","10"].forEach(function(c){
    var p=document.getElementById("sc_"+c); if(p) p.classList.add("hc-hidden");
  });
  document.getElementById("scTabs").querySelectorAll(".hc-tab")
    .forEach(function(t){ t.classList.remove("active"); });
  var p=document.getElementById("sc_"+cls);
  if(p) p.classList.remove("hc-hidden");
  btn.classList.add("active");
}

// ══ TEST ROW ══════════════════════════════════════════════
function buildTestRow(test) {
  var isLive   = (test.live === true);
  var isLocked = !!(test.password && test.password !== "");

  var badge = isLive
    ? '<span class="hc-badge-live">● Live</span>'
    : '<span class="hc-badge-soon">Soon</span>';

  var meta = [];
  if (test.questions)                     meta.push(test.questions + " Q");
  if (test.duration)                      meta.push("⏱ " + test.duration + " min");
  if (test.subject)                       meta.push(test.subject);
  if (test.class && test.class !== "all") meta.push("Std " + test.class);

  var btn = isLive
    ? '<button class="hc-btn-start" onclick="goToTest('' + test.id + '')">Start →</button>'
    : '<button class="hc-btn-soon">Soon</button>';

  return '<div class="hc-row">'
    + '<div class="hc-row-info">'
    + '<div class="hc-row-top">'
    + '<span class="hc-row-title">' + (isLocked ? "🔒 " : "") + test.title + '</span>'
    + badge
    + '</div>'
    + '<div class="hc-row-meta">' + meta.join(" · ") + '</div>'
    + '</div>'
    + '<div class="hc-row-actions">' + btn + '</div>'
    + '</div>';
}

// ══ SECTION HEADER ════════════════════════════════════════
function appendSectionHeader(grid, icon, title, subtitle) {
  var hdr = document.createElement("div");
  hdr.className = "hc-section-hdr";
  hdr.innerHTML =
    '<span class="hc-section-icon">' + icon + '</span>'
    + '<div>'
    + '<div class="hc-section-title">' + title + '</div>'
    + '<div class="hc-section-sub">' + subtitle + '</div>'
    + '</div>';
  grid.appendChild(hdr);
}

// ══ NAVIGATE ══════════════════════════════════════════════
function goToTest(testId) {
  var test = getAllTests().find(function(t){ return t.id===testId; });
  if (!test) { window.location.href="test.html?id="+testId; return; }
  if (!test.live) { return; } // safety: shouldn't reach here but guard anyway
  if (test.password && test.password !== "") {
    var entered = prompt("🔒 Enter password to start:\n" + test.title);
    if (entered === null) return;
    if (entered.trim() !== test.password) {
      alert("❌ Wrong password. Please try again.");
      return;
    }
  }
  window.location.href = "test.html?id=" + testId;
}

// ══ UTILS ═════════════════════════════════════════════════
function getAllTests()  { return window.ALL_TESTS || []; }
function makePanelWrap(){ var w=document.createElement("div"); w.className="hc-wrap"; return w; }
function escKey(s)     { return s.replace(/\s+/g,"_").replace(/[^a-zA-Z0-9_]/g,""); }
function normalise(s)  { return (s||"").toLowerCase().replace(/[\s\-_]/g,""); }
function getTodayStr() {
  var d=new Date();
  return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
}
function subjIcon(s) {
  return {Maths:"📐",Science:"🔬",English:"📘","Social Science":"🗺️",
          Physics:"⚡",Chemistry:"⚗️",Biology:"🧬",GK:"🌍",Mixed:"📋"}[s]||"📄";
}

// ══ STYLES ════════════════════════════════════════════════
(function(){
  var s = document.createElement("style");
  s.textContent = `
    .hc-section-hdr {
      display: flex; align-items: center; gap: 12px;
      padding: 28px 4px 10px;
    }
    .hc-section-icon { font-size: 1.6rem; line-height:1; }
    .hc-section-title { font-size:1rem; font-weight:800; color:var(--text,#1c1c1e); line-height:1.2; }
    .hc-section-sub { font-size:0.75rem; color:var(--text-2,#6e6e73); margin-top:2px; }

    .hc-wrap {
      background: var(--card,#fff);
      border: 1px solid var(--border-color,#e5e5ea);
      border-radius: 16px;
      overflow: hidden;
      margin-bottom: 2px;
    }

    .hc-tabs {
      display:flex; gap:0; overflow-x:auto;
      border-bottom: 1px solid var(--border-color,#e5e5ea);
      background: var(--card,#fff);
      scrollbar-width: none;
    }
    .hc-tabs::-webkit-scrollbar { display:none; }

    .hc-tab {
      flex-shrink:0; padding:11px 16px;
      font-size:13px; font-weight:600;
      color:var(--text-2,#6e6e73);
      background:none; border:none;
      border-bottom: 2px solid transparent;
      cursor:pointer;
      transition: color .15s, border-color .15s;
      white-space: nowrap;
    }
    .hc-tab:hover { color:var(--text,#1c1c1e); }
    .hc-tab.active { color:var(--accent,#2563eb); border-bottom-color:var(--accent,#2563eb); }

    .hc-panel { }
    .hc-panel.hc-hidden { display:none; }

    .hc-list { display:flex; flex-direction:column; }

    .hc-row {
      display:flex; align-items:center; justify-content:space-between;
      gap:12px; padding:13px 16px;
      border-bottom: 1px solid var(--border-color,#f2f2f7);
      transition: background .12s;
    }
    .hc-row:last-child { border-bottom:none; }
    .hc-row:hover { background:var(--hover,#f9f9fb); }

    .hc-row-info { flex:1; min-width:0; }
    .hc-row-top  { display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:3px; }
    .hc-row-title { font-size:13.5px; font-weight:600; color:var(--text,#1c1c1e); line-height:1.3; }
    .hc-row-meta  { font-size:12px; color:var(--text-2,#6e6e73); }
    .hc-row-actions { display:flex; align-items:center; gap:6px; flex-shrink:0; }

    .hc-badge-live {
      font-size:10.5px; font-weight:700; color:#16a34a;
      background:#f0fdf4; border:1px solid #bbf7d0;
      padding:2px 8px; border-radius:20px; white-space:nowrap;
    }
    .hc-badge-soon {
      font-size:10.5px; font-weight:600; color:#92400e;
      background:#fffbeb; border:1px solid #fde68a;
      padding:2px 8px; border-radius:20px; white-space:nowrap;
    }

    .hc-btn-start {
      font-size:12.5px; font-weight:700; color:#fff;
      background:#2563eb; border:none; border-radius:8px;
      padding:7px 16px; cursor:pointer; white-space:nowrap;
      transition: background .15s, transform .1s;
    }
    .hc-btn-start:hover { background:#1d4ed8; transform:scale(1.03); }

    .hc-btn-soon {
      font-size:12.5px; font-weight:600; color:#9ca3af;
      background:#f3f4f6; border:1px solid #e5e7eb;
      border-radius:8px; padding:7px 16px;
      cursor:default; white-space:nowrap;
    }

    .hc-empty {
      color:#9ca3af; font-style:italic;
      font-size:13px; padding:20px 16px; text-align:center;
    }

    @media (max-width:480px) {
      .hc-row { padding:11px 12px; }
      .hc-row-title { font-size:13px; }
      .hc-btn-start, .hc-btn-soon { padding:6px 11px; font-size:12px; }
      .hc-tab { padding:10px 12px; font-size:12px; }
      .hc-section-title { font-size:0.9rem; }
    }
  `;
  document.head.appendChild(s);
})();
