// home.js — Hinde Classes Portal
// Renders all sections into #testsGrid
// Load order: <script src="config.js"></script> <script src="home.js"></script>

document.addEventListener("DOMContentLoaded", function () {
  renderTestsGrid();
});

// ══ STANDARDS ═════════════════════════════════════════════════
var STANDARDS = [
  { key:"std5",  section:"std5",  classNum:"5",  label:"Standard 5",  icon:"📓", subjects:["Maths","Science","English"] },
  { key:"std6",  section:"std6",  classNum:"6",  label:"Standard 6",  icon:"📔", subjects:["Maths","Science","English"] },
  { key:"std7",  section:"std7",  classNum:"7",  label:"Standard 7",  icon:"📒", subjects:["Maths","Science","English","Social Science"] },
  { key:"std8",  section:"std8",  classNum:"8",  label:"Standard 8",  icon:"📙", subjects:["Maths","Science","English","Social Science"] },
  { key:"std9",  section:"std9",  classNum:"9",  label:"Standard 9",  icon:"📗", subjects:["Maths","Science","English","Social Science"] },
  { key:"std10", section:"std10", classNum:"10", label:"Standard 10", icon:"📘", subjects:["Maths","Science","English","Social Science"] },
  { key:"std11", section:"std11", classNum:"11", label:"Standard 11", icon:"📕", subjects:["Maths","Physics","Chemistry","Biology","English"] },
  { key:"std12", section:"std12", classNum:"12", label:"Standard 12", icon:"📕", subjects:["Maths","Physics","Chemistry","Biology","English"] }
];

// ══ TOP-PANEL TIMERS ══════════════════════════════════════════
var top20Timers = {};

// ══ MAIN RENDER ═══════════════════════════════════════════════
function renderTestsGrid() {
  var grid = document.getElementById("testsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  appendDailyTests(grid);
  STANDARDS.forEach(function(std){ appendStandardSection(grid, std); });
  appendOlympiadSection(grid);
  appendScholarshipSection(grid);
  appendMATSection(grid);
}

// ══ DAILY QUIZ ════════════════════════════════════════════════
function appendDailyTests(grid) {
  var tests = getAllTests().filter(function(t){ return t.section==="daily"; });

  // Section header with anchor for jump links
  appendSectionHeader(grid, "📅", "Daily Quiz", "10 questions · 10 minutes · Mixed subjects · Free for all", "sec-daily");

  var wrap = makePanelWrap();

  if (!tests.length) {
    wrap.innerHTML = '<p class="hc-empty">No daily quizzes yet. Check back tomorrow!</p>';
    grid.appendChild(wrap);
    return;
  }

  tests.sort(function(a,b){ return b.id > a.id ? 1 : -1; });

  var dateMap = {}, dateOrder = [];
  tests.forEach(function(t) {
    var m = t.id.match(/(\d{4})(\d{2})(\d{2})/);
    var key = m ? (m[1]+"-"+m[2]+"-"+m[3]) : "other";
    if (!dateMap[key]) { dateMap[key]=[]; dateOrder.push(key); }
    dateMap[key].push(t);
  });

  var today = getTodayStr();
  function fmtDate(d) {
    if (d==="other") return "Other";
    var mo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var p=d.split("-"); return p[2]+" "+mo[+p[1]-1]+" "+p[0];
  }

  var tabsHtml = '<div class="hc-tabs" id="dailyTabs">';
  dateOrder.forEach(function(d,i){
    tabsHtml += '<button class="hc-tab'+(i===0?" active":"")
      +'" onclick="showDailyTab(\''+d+'\',this)">'
      +(d===today?"🔴 Today":fmtDate(d))+'</button>';
  });
  tabsHtml += '</div>';

  var panelsHtml = "";
  dateOrder.forEach(function(d,i){
    var rows = dateMap[d].map(buildTestRow).join("");
    panelsHtml += '<div id="dtp_'+d+'" class="hc-panel'+(i>0?" hc-hidden":"")+'"><div class="hc-list">'+rows+'</div></div>';
  });

  wrap.innerHTML = tabsHtml + panelsHtml;
  grid.appendChild(wrap);
}

function showDailyTab(date, btn) {
  document.querySelectorAll("[id^='dtp_']").forEach(function(p){ p.classList.add("hc-hidden"); });
  document.getElementById("dailyTabs").querySelectorAll(".hc-tab").forEach(function(t){ t.classList.remove("active"); });
  var p = document.getElementById("dtp_"+date); if(p) p.classList.remove("hc-hidden");
  btn.classList.add("active");
}

// ══ STANDARD SECTIONS ═════════════════════════════════════════
function appendStandardSection(grid, std) {
  var allTests = getAllTests().filter(function(t){
    return t.section===std.section && (t.class===std.classNum || t.class==="all");
  });

  // Section header with anchor ID for quick-jump
  appendSectionHeader(grid, std.icon, std.label, std.subjects.join(" · "), "sec-"+std.key);

  var wrap = makePanelWrap();
  var uid  = std.key;

  var tabsHtml = '<div class="hc-tabs" id="tabs_'+uid+'">';
  tabsHtml += '<button class="hc-tab active" onclick="showStdTab(\''+uid+'\',\'all\',this)">📚 All</button>';
  std.subjects.forEach(function(subj){
    tabsHtml += '<button class="hc-tab" onclick="showStdTab(\''+uid+'\',\''+escKey(subj)+'\',this)">'+subjIcon(subj)+' '+subj+'</button>';
  });
  tabsHtml += '</div>';

  var allRows = allTests.length ? allTests.map(buildTestRow).join("") : '<p class="hc-empty">Tests for '+std.label+' are coming soon!</p>';
  var panelsHtml = '<div id="panel_'+uid+'_all" class="hc-panel"><div class="hc-list">'+allRows+'</div></div>';

  std.subjects.forEach(function(subj){
    var filtered = allTests.filter(function(t){ return normalise(t.subject)===normalise(subj); });
    var rows = filtered.length ? filtered.map(buildTestRow).join("") : '<p class="hc-empty">'+subj+' tests coming soon!</p>';
    panelsHtml += '<div id="panel_'+uid+'_'+escKey(subj)+'" class="hc-panel hc-hidden"><div class="hc-list">'+rows+'</div></div>';
  });

  wrap.innerHTML = tabsHtml + panelsHtml;
  grid.appendChild(wrap);
}

function showStdTab(uid, subj, btn) {
  document.querySelectorAll("[id^='panel_"+uid+"_']").forEach(function(p){ p.classList.add("hc-hidden"); });
  document.getElementById("tabs_"+uid).querySelectorAll(".hc-tab").forEach(function(t){ t.classList.remove("active"); });
  var panel = document.getElementById("panel_"+uid+"_"+subj);
  if(panel) panel.classList.remove("hc-hidden");
  btn.classList.add("active");
}

// ══ OLYMPIAD ══════════════════════════════════════════════════
function appendOlympiadSection(grid) {
  var mathTests = getAllTests().filter(function(t){ return t.section==="olm"; });
  var sciTests  = getAllTests().filter(function(t){ return t.section==="olsci"; });
  if (!mathTests.length && !sciTests.length) return;

  appendSectionHeader(grid, "🏆", "Olympiad Training", "IMO · NSO · All standards", "sec-olm");
  var wrap = makePanelWrap();

  var tabsHtml = '<div class="hc-tabs" id="olmTabs">'
    +'<button class="hc-tab active" onclick="showOlmTab(\'maths\',this)">📐 Maths — IMO</button>'
    +'<button class="hc-tab" onclick="showOlmTab(\'science\',this)">🔬 Science — NSO</button>'
    +'</div>';

  var mathRows = mathTests.length ? mathTests.map(buildTestRow).join("") : '<p class="hc-empty">Coming soon!</p>';
  var sciRows  = sciTests.length  ? sciTests.map(buildTestRow).join("")  : '<p class="hc-empty">Coming soon!</p>';

  wrap.innerHTML = tabsHtml
    +'<div id="olm_maths" class="hc-panel"><div class="hc-list">'+mathRows+'</div></div>'
    +'<div id="olm_science" class="hc-panel hc-hidden"><div class="hc-list">'+sciRows+'</div></div>';
  grid.appendChild(wrap);
}

function showOlmTab(subj, btn) {
  ["maths","science"].forEach(function(s){ var p=document.getElementById("olm_"+s); if(p) p.classList.add("hc-hidden"); });
  document.getElementById("olmTabs").querySelectorAll(".hc-tab").forEach(function(t){ t.classList.remove("active"); });
  var p=document.getElementById("olm_"+subj); if(p) p.classList.remove("hc-hidden");
  btn.classList.add("active");
}

// ══ SCHOLARSHIP ═══════════════════════════════════════════════
function appendScholarshipSection(grid) {
  var tests = getAllTests().filter(function(t){ return t.section==="scholar"; });
  if (!tests.length) return;

  appendSectionHeader(grid, "🏅", "Scholarship & NTSE", "NTSE MAT Mock Test · State Scholarship · Class 5–10", "sec-scholar");
  var wrap = makePanelWrap();
  var classes = ["ntse","5","6","7","8","9","10"];
  var icons   = {"ntse":"🏆","5":"📓","6":"📔","7":"📒","8":"📙","9":"📗","10":"📘"};

  var tabsHtml = '<div class="hc-tabs" id="scTabs">';
  classes.forEach(function(cls,i){
    tabsHtml += '<button class="hc-tab'+(i===0?" active":"")
      +'" onclick="showScTab(\''+cls+'\',this)">'+(cls==='ntse'?'🏆 NTSE':icons[cls]+' Class '+cls)+'</button>';
  });
  tabsHtml += '</div>';

  var panelsHtml = "";
  classes.forEach(function(cls,i){
    var clsTests = tests.filter(function(t){ return t.class===cls; });
    var rows = clsTests.length ? clsTests.map(buildTestRow).join("") : '<p class="hc-empty">'+(cls==="ntse"?"NTSE":"Class "+cls)+' coming soon!</p>';
    panelsHtml += '<div id="sc_'+cls+'" class="hc-panel'+(i>0?" hc-hidden":"")+'"><div class="hc-list">'+rows+'</div></div>';
  });

  wrap.innerHTML = tabsHtml + panelsHtml;
  grid.appendChild(wrap);
}

function showScTab(cls, btn) {
  ["ntse","5","6","7","8","9","10"].forEach(function(c){ var p=document.getElementById("sc_"+c); if(p) p.classList.add("hc-hidden"); });
  document.getElementById("scTabs").querySelectorAll(".hc-tab").forEach(function(t){ t.classList.remove("active"); });
  var p=document.getElementById("sc_"+cls); if(p) p.classList.remove("hc-hidden");
  btn.classList.add("active");
}

// ══ MAT TOPIC TESTS ═══════════════════════════════════════════
function appendMATSection(grid) {
  var tests = getAllTests().filter(function(t){ return t.section==="mat"; });
  if (!tests.length) return;

  appendSectionHeader(grid, "🧠", "MAT Topic Tests", "Mental Ability Test · Topic-wise practice · NTSE / Olympiad prep", "sec-mat");
  var wrap = makePanelWrap();

  // Group tests into 5 tabs of ~5 topics each
  var tabGroups = [
    { key: "verbal1",    label: "📝 Verbal Part 1",    ids: ["mat_t01","mat_t02","mat_t03","mat_t04","mat_t05"] },
    { key: "verbal2",    label: "📝 Verbal Part 2",    ids: ["mat_t06","mat_t07","mat_t08","mat_t09","mat_t10"] },
    { key: "verbal3",    label: "📝 Verbal Part 3",    ids: ["mat_t11","mat_t12","mat_t13","mat_t14","mat_t15"] },
    { key: "verbal4",    label: "📝 Verbal Part 4",    ids: ["mat_t16"] },
    { key: "nonverbal",  label: "🔷 Non-Verbal",       ids: ["mat_t17","mat_t18","mat_t19","mat_t20","mat_t21","mat_t22","mat_t23","mat_t24","mat_t25"] }
  ];

  var tabsHtml = '<div class="hc-tabs" id="matTabs">';
  tabGroups.forEach(function(grp, i){
    tabsHtml += '<button class="hc-tab'+(i===0?" active":"")
      +'" onclick="showMatTab(\''+grp.key+'\',this)">'+grp.label+'</button>';
  });
  tabsHtml += '</div>';

  var panelsHtml = "";
  tabGroups.forEach(function(grp, i){
    var grpTests = tests.filter(function(t){ return grp.ids.indexOf(t.id) !== -1; });
    var rows = grpTests.length ? grpTests.map(buildTestRow).join("") : '<p class="hc-empty">Coming soon!</p>';
    panelsHtml += '<div id="mat_'+grp.key+'" class="hc-panel'+(i>0?" hc-hidden":"")+'"><div class="hc-list">'+rows+'</div></div>';
  });

  wrap.innerHTML = tabsHtml + panelsHtml;
  grid.appendChild(wrap);
}

function showMatTab(key, btn) {
  ["verbal1","verbal2","verbal3","verbal4","nonverbal"].forEach(function(k){ var p=document.getElementById("mat_"+k); if(p) p.classList.add("hc-hidden"); });
  document.getElementById("matTabs").querySelectorAll(".hc-tab").forEach(function(t){ t.classList.remove("active"); });
  var p=document.getElementById("mat_"+key); if(p) p.classList.remove("hc-hidden");
  btn.classList.add("active");
}

// ══ TEST ROW (with Toppers button) ════════════════════════════
function buildTestRow(test) {
  var isLive   = (test.live === true);
  var isLocked = !!(test.password && test.password !== "");

  var badge = isLive
    ? '<span class="hc-badge-live">● Live</span>'
    : '<span class="hc-badge-soon">Soon</span>';

  var meta = [];
  if (test.questions)                     meta.push(test.questions+" Q");
  if (test.duration)                      meta.push("⏱ "+test.duration+" min");
  if (test.totalMarks)                    meta.push(test.totalMarks+" marks");
  if (test.subject)                       meta.push(test.subject);
  if (test.class && test.class!=="all")   meta.push("Std "+test.class);

  // Toppers button (always shown for live tests)
  var toppersBtn = isLive
    ? '<button class="hc-btn-toppers" onclick="toggleToppers(\''+test.id+'\',\''+test.title.replace(/'/g,"\\'")+'\','+(test.totalMarks||0)+',this)">🏅 Toppers</button>'
    : '';

  var startBtn = isLive
    ? '<button class="hc-btn-start" onclick="goToTest(\''+test.id+'\')">Start →</button>'
    : '<button class="hc-btn-soon">Soon</button>';

  return '<div class="hc-row">'
    +'<div class="hc-row-info">'
    +'<div class="hc-row-top">'
    +'<span class="hc-row-title">'+(isLocked?"🔒 ":"")+test.title+'</span>'
    +badge
    +'</div>'
    +'<div class="hc-row-meta">'+meta.join(" · ")+'</div>'
    +'</div>'
    +'<div class="hc-row-actions">'+toppersBtn+startBtn+'</div>'
    +'</div>'
    +'<div class="hc-top20-panel" id="top20_'+test.id+'"></div>';
}

// ══ TOPPERS PANEL ═════════════════════════════════════════════
function toggleToppers(testId, testTitle, totalMarks, btn) {
  var panel = document.getElementById("top20_"+testId);
  if (!panel) return;

  if (panel.classList.contains("open")) {
    panel.classList.remove("open");
    btn.textContent = "🏅 Toppers";
    if (top20Timers[testId]) { clearInterval(top20Timers[testId]); delete top20Timers[testId]; }
    return;
  }

  panel.classList.add("open");
  btn.textContent = "✕ Close";
  fetchToppers(testId, testTitle, totalMarks, panel);

  // Auto-refresh every 30s
  top20Timers[testId] = setInterval(function(){
    fetchToppers(testId, testTitle, totalMarks, panel);
  }, 30000);
}

function fetchToppers(testId, testTitle, totalMarks, panel) {
  var url = window.SCRIPT_URL;
  if (!url || url==="PASTE_YOUR_APPS_SCRIPT_URL_HERE") {
    panel.innerHTML = '<div class="hc-top20-inner"><p class="hc-top20-empty">Leaderboard not configured yet.</p></div>';
    return;
  }

  panel.innerHTML = '<div class="hc-top20-inner"><p class="hc-top20-loading">⏳ Loading leaderboard...</p></div>';

  // Use fetch() — Apps Script GET returns JSON directly
  fetch(url + "?testId=" + encodeURIComponent(testId))
    .then(function(r){ return r.json(); })
    .then(function(res){ renderToppers(res, testTitle, totalMarks, panel); })
    .catch(function(){ panel.innerHTML = '<div class="hc-top20-inner"><p class="hc-top20-empty">Could not load leaderboard.</p></div>'; });
}

function renderToppers(res, testTitle, totalMarks, panel) {
  if (!res || !res.success) {
    panel.innerHTML = '<div class="hc-top20-inner"><p class="hc-top20-empty">Leaderboard unavailable.</p></div>';
    return;
  }

  var data   = res.data  || [];
  var count  = res.count || data.length;
  var medals = ["🥇","🥈","🥉"];

  var rows = "";
  if (!data.length) {
    rows = '<p class="hc-top20-empty">No attempts yet — be the first! 🚀</p>';
  } else {
    data.forEach(function(r, i) {
      var outOf = totalMarks || r.total || 1;
      var pct   = Math.round((r.total / outOf) * 100);
      var rank  = i < 3
        ? medals[i]
        : '<span style="width:20px;height:20px;border-radius:50%;background:#e5e5ea;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#3a3a3c;">'+(i+1)+'</span>';

      rows += '<li class="hc-top20-item">'
        +'<span class="hc-top20-rank">'+rank+'</span>'
        +'<div class="hc-top20-info">'
        +'<div class="hc-top20-name">'+escHtml(r.name)+'</div>'
        +'<div class="hc-top20-bar-wrap"><div class="hc-top20-bar" style="width:'+Math.max(4,pct)+'%"></div></div>'
        +'</div>'
        +'<span class="hc-top20-score">'+r.total+'<span class="hc-top20-outof">/'+outOf+'</span></span>'
        +'</li>';
    });
  }

  panel.innerHTML =
    '<div class="hc-top20-inner">'
    +'<div class="hc-top20-hdr">'
    +'<span>🏆 '+testTitle+'</span>'
    +'<span class="hc-top20-count">'+count+' attempted</span>'
    +'</div>'
    +'<ol class="hc-top20-list">'+rows+'</ol>'
    +(data.length ? '<div class="hc-top20-footer">Top 20 · Auto-refreshes every 30s</div>' : '')
    +'</div>';
}

// ══ NAVIGATE TO TEST ══════════════════════════════════════════
// NO prompts here — test.html handles name + password
function goToTest(testId) {
  var test = getAllTests().find(function(t){ return t.id===testId; });
  if (!test || !test.live) return;
  // Just navigate — test.html will ask for name + password
  window.location.href = "test.html?id=" + testId;
}

// ══ SECTION HEADER (with anchor id) ══════════════════════════
function appendSectionHeader(grid, icon, title, subtitle, anchorId) {
  var hdr = document.createElement("div");
  hdr.className = "hc-section-hdr";
  if (anchorId) hdr.id = anchorId;   // ← THIS fixes the quick-jump scroll
  hdr.innerHTML =
    '<span class="hc-section-icon">'+icon+'</span>'
    +'<div>'
    +'<div class="hc-section-title">'+title+'</div>'
    +'<div class="hc-section-sub">'+subtitle+'</div>'
    +'</div>';
  grid.appendChild(hdr);
}

// ══ UTILS ═════════════════════════════════════════════════════
function getAllTests()  { return window.ALL_TESTS || []; }
function makePanelWrap(){ var w=document.createElement("div"); w.className="hc-wrap"; return w; }
function escKey(s)     { return s.replace(/\s+/g,"_").replace(/[^a-zA-Z0-9_]/g,""); }
function normalise(s)  { return (s||"").toLowerCase().replace(/[\s\-_]/g,""); }
function escHtml(s)    { return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function getTodayStr() {
  var d=new Date();
  return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
}
function subjIcon(s) {
  return {Maths:"📐",Science:"🔬",English:"📘","Social Science":"🗺️",Physics:"⚡",Chemistry:"⚗️",Biology:"🧬"}[s]||"📄";
}

// ══ STYLES ════════════════════════════════════════════════════
(function(){
  var s = document.createElement("style");
  s.textContent = `
    .hc-section-hdr { display:flex; align-items:center; gap:12px; padding:28px 4px 10px; scroll-margin-top:64px; }
    .hc-section-icon { font-size:1.5rem; line-height:1; }
    .hc-section-title { font-size:15px; font-weight:800; color:#1d1d1f; letter-spacing:-0.3px; }
    .hc-section-sub { font-size:11px; color:#86868b; margin-top:2px; }

    .hc-wrap { background:#fff; border-radius:16px; border:1px solid rgba(0,0,0,0.07); overflow:hidden; margin-bottom:2px; }

    .hc-tabs { display:flex; overflow-x:auto; border-bottom:1px solid rgba(0,0,0,0.07); scrollbar-width:none; }
    .hc-tabs::-webkit-scrollbar { display:none; }
    .hc-tab { flex-shrink:0; padding:10px 16px; font-size:12px; font-weight:600; color:#86868b; background:none; border:none; border-bottom:2px solid transparent; cursor:pointer; transition:color .15s,border-color .15s; white-space:nowrap; font-family:inherit; }
    .hc-tab:hover { color:#1d1d1f; }
    .hc-tab.active { color:#0d9488; border-bottom-color:#0d9488; }

    .hc-panel { }
    .hc-panel.hc-hidden { display:none; }
    .hc-list { display:flex; flex-direction:column; }

    .hc-row { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px 16px; border-bottom:1px solid rgba(0,0,0,0.05); transition:background .12s; flex-wrap:wrap; }
    .hc-row:last-child { border-bottom:none; }
    .hc-row:hover { background:#f9f9fb; }
    .hc-row-info { flex:1; min-width:200px; }
    .hc-row-top { display:flex; align-items:center; gap:7px; flex-wrap:wrap; margin-bottom:3px; }
    .hc-row-title { font-size:13px; font-weight:600; color:#1d1d1f; line-height:1.3; }
    .hc-row-meta { font-size:11px; color:#86868b; }
    .hc-row-actions { display:flex; align-items:center; gap:6px; flex-shrink:0; }

    .hc-badge-live { font-size:10px; font-weight:600; color:#34c759; background:#e8f8ec; padding:2px 7px; border-radius:4px; white-space:nowrap; }
    .hc-badge-soon { font-size:10px; color:#aeaeb2; background:#f5f5f7; padding:2px 6px; border-radius:4px; }

    .hc-btn-toppers { padding:5px 10px; background:#f0fdf9; color:#0d9488; border:1px solid rgba(13,148,136,0.2); border-radius:6px; font-size:11px; font-weight:600; cursor:pointer; font-family:inherit; white-space:nowrap; transition:background .15s; }
    .hc-btn-toppers:hover { background:#ccfbf1; }
    .hc-btn-start { padding:6px 14px; background:#0d9488; color:#fff; border:none; border-radius:7px; font-size:11px; font-weight:700; cursor:pointer; font-family:inherit; white-space:nowrap; transition:background .15s; }
    .hc-btn-start:hover { background:#0f766e; }
    .hc-btn-soon { padding:6px 14px; background:#f5f5f7; color:#aeaeb2; border:none; border-radius:7px; font-size:11px; cursor:default; font-family:inherit; white-space:nowrap; }

    /* ── Toppers panel ── */
    .hc-top20-panel { display:none; }
    .hc-top20-panel.open { display:block; background:#f9fafb; border-top:1px solid rgba(0,0,0,0.06); }
    .hc-top20-inner { padding:14px 16px 12px; }
    .hc-top20-hdr { display:flex; justify-content:space-between; align-items:center; font-size:12px; font-weight:700; color:#1d1d1f; margin-bottom:10px; }
    .hc-top20-count { font-weight:400; color:#86868b; font-size:11px; }
    .hc-top20-list { list-style:none; display:flex; flex-direction:column; gap:5px; }
    .hc-top20-item { display:flex; align-items:center; gap:8px; background:#fff; border-radius:8px; padding:7px 10px; border:1px solid rgba(0,0,0,0.05); }
    .hc-top20-rank { font-size:14px; width:22px; text-align:center; flex-shrink:0; }
    .hc-top20-info { flex:1; min-width:0; }
    .hc-top20-name { font-size:12px; font-weight:600; color:#1d1d1f; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .hc-top20-bar-wrap { height:2px; background:#e5e5ea; border-radius:2px; margin-top:4px; }
    .hc-top20-bar { height:100%; background:#0d9488; border-radius:2px; }
    .hc-top20-score { font-size:12px; font-weight:700; color:#1d1d1f; flex-shrink:0; }
    .hc-top20-outof { font-size:10px; color:#86868b; }
    .hc-top20-footer { font-size:10px; color:#aeaeb2; text-align:center; margin-top:10px; padding-top:8px; border-top:1px solid rgba(0,0,0,0.05); }
    .hc-top20-empty { font-size:12px; color:#aeaeb2; font-style:italic; text-align:center; padding:8px; }
    .hc-top20-loading { font-size:12px; color:#86868b; text-align:center; padding:12px; }

    .hc-empty { color:#aeaeb2; font-style:italic; font-size:12px; padding:18px 16px; text-align:center; }

    @media (max-width:500px) {
      .hc-row-actions { width:100%; justify-content:flex-end; }
      .hc-section-hdr { padding:22px 4px 8px; }
    }
  `;
  document.head.appendChild(s);
})();
