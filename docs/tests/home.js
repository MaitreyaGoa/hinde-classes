// ============================================================
// HINDE CLASSES — home.js
// Renders test cards · Toppers button on each card
// Modal shows total students + top 15 leaderboard
// ============================================================

(function () {

  // ---- Utility: section pills HTML ----
  function sectionPills(sections) {
    return Object.entries(sections)
      .map(function (e) { return '<span class="pill">' + e[0] + ' · ' + e[1] + 'Q</span>'; })
      .join('');
  }

  // ---- Build a test card HTML ----
  function buildCard(test, category) {
    var badge = test.live
      ? '<span class="badge live">● Live</span>'
      : '<span class="badge soon">Coming Soon</span>';

    var footerBtns;
    if (test.live) {
      footerBtns =
        '<button class="btn-toppers" onclick="window.openToppers(\'' + test.id + '\',\'' + escHtml(test.title) + '\')">🏆 Toppers</button>'
        + '<a class="btn-start" href="test.html?id=' + test.id + '">Start →</a>';
    } else {
      footerBtns = '<span class="btn-disabled">Coming Soon</span>';
    }

    return '<div class="test-card' + (test.live ? '' : ' card-dim') + '" data-id="' + test.id + '" data-category="' + category + '" data-class="' + (test.class || '') + '">'
      + '<div class="card-top">'
      + '<div class="card-icon">📋</div>'
      + badge
      + '</div>'
      + '<h3 class="card-title">' + test.title + '</h3>'
      + '<p class="card-desc">' + test.description + '</p>'
      + '<div class="card-pills">' + sectionPills(test.sections) + '</div>'
      + '<div class="card-footer">'
      + '<span class="card-marks">🏆 ' + test.totalMarks + ' Marks</span>'
      + '<div class="card-btns">' + footerBtns + '</div>'
      + '</div>'
      + '</div>';
  }

  // ---- Render a section ----
  function renderSection(containerId, tests, category) {
    var el = document.getElementById(containerId);
    if (!el) return;
    if (!tests || tests.length === 0) {
      el.innerHTML = '<p class="empty-msg">Tests coming soon! Check back later.</p>';
      return;
    }
    el.innerHTML = tests.map(function (t) { return buildCard(t, category); }).join('');
  }

  // ---- CLASS_TESTS sub-section router ----
  function routeClassTests() {
    var sections = {
      'sec-c56':   ['5','6'],
      'sec-c78':   ['7','8'],
      'sec-c910':  ['9','10'],
      'sec-c1112': ['11','12']
    };
    Object.keys(sections).forEach(function (secId) {
      var classes = sections[secId];
      var filtered = CLASS_TESTS.filter(function (t) {
        return classes.indexOf(t.class) !== -1;
      });
      renderSection(secId + '-grid', filtered, 'CLASS_TESTS');
    });
  }

  // ---- Main render ----
  function renderAll() {
    routeClassTests();
    renderSection('subject-tests-grid', SUBJECT_TESTS, 'SUBJECT_TESTS');
    var olmMaths = OLYMPIAD_TESTS.filter(function (t) { return t.subject === 'Maths'; });
    renderSection('sec-olm-grid', olmMaths, 'OLYMPIAD_TESTS');
    var olmSci = OLYMPIAD_TESTS.filter(function (t) { return t.subject === 'Science'; });
    renderSection('sec-olsci-grid', olmSci, 'OLYMPIAD_TESTS');
    renderSection('sec-scholar-grid', SCHOLARSHIP_TESTS, 'SCHOLARSHIP_TESTS');
    renderSection('sec-daily-grid', DAILY_QUIZ, 'DAILY_QUIZ');
    renderSection('special-tests-grid', SPECIAL_TESTS, 'SPECIAL_TESTS');
  }

  // ---- Stats counter ----
  function updateStats() {
    var liveCount = CLASS_TESTS.filter(function (t) { return t.live; }).length
      + OLYMPIAD_TESTS.filter(function (t) { return t.live; }).length
      + DAILY_QUIZ.filter(function (t) { return t.live; }).length;
    var totalCount = CLASS_TESTS.length + SUBJECT_TESTS.length
      + OLYMPIAD_TESTS.length + SCHOLARSHIP_TESTS.length
      + DAILY_QUIZ.length + SPECIAL_TESTS.length;
    var el = document.getElementById('stat-live');
    if (el) el.textContent = liveCount;
    var el2 = document.getElementById('stat-total');
    if (el2) el2.textContent = totalCount;
  }

  // ---- Smooth scroll for nav links ----
  function initNav() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ============================================================
  // TOPPERS MODAL — opens on 🏆 Toppers button click
  // Shows: total students answered + top 15 leaderboard table
  // ============================================================

  var MEDALS = ['🥇', '🥈', '🥉'];

  // ---- Inject modal HTML once into body ----
  function injectModal() {
    if (document.getElementById('toppers-modal')) return;
    var div = document.createElement('div');
    div.innerHTML = '<div id="toppers-modal" class="tm-overlay" onclick="window.closeToppers(event)">'
      + '<div class="tm-box">'
      + '<div class="tm-header">'
      + '<div>'
      + '<div class="tm-title" id="tm-title">Toppers</div>'
      + '<div class="tm-sub" id="tm-sub"></div>'
      + '</div>'
      + '<button class="tm-close" onclick="window.closeToppers()">✕</button>'
      + '</div>'
      + '<div class="tm-stats-strip" id="tm-stats-strip"></div>'
      + '<div class="tm-body" id="tm-body"></div>'
      + '</div>'
      + '</div>';
    document.body.appendChild(div.firstChild);
  }

  // ---- Open modal for a testId ----
  window.openToppers = function (testId, testTitle) {
    var modal   = document.getElementById('toppers-modal');
    var titleEl = document.getElementById('tm-title');
    var subEl   = document.getElementById('tm-sub');
    var statsEl = document.getElementById('tm-stats-strip');
    var bodyEl  = document.getElementById('tm-body');

    titleEl.textContent = '🏆 ' + testTitle;
    subEl.textContent   = 'Top 15 Students';
    statsEl.innerHTML   = '<span class="tm-stat-chip skel-chip"></span><span class="tm-stat-chip skel-chip" style="width:100px"></span>';
    bodyEl.innerHTML    = buildSkeletonRows(5);

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (!SCRIPT_URL || SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL') {
      statsEl.innerHTML = '<span class="tm-stat-chip">⚠️ Backend not connected</span>';
      bodyEl.innerHTML  = '<p class="tm-empty">Connect Google Sheets backend to see results.</p>';
      return;
    }

    var url = SCRIPT_URL + '?action=read&testId=' + encodeURIComponent(testId);
    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var allRows = data.rows || [];
        // Sort by total desc (already sorted server-side, but ensure)
        allRows.sort(function (a, b) { return Number(b[4]) - Number(a[4]); });
        var top15  = allRows.slice(0, 15);
        var total  = allRows.length;

        // Stats strip
        var topScore = total > 0 ? allRows[0][4] : 0;
        var avgScore = total > 0
          ? (allRows.reduce(function (s, r) { return s + Number(r[4]); }, 0) / total).toFixed(1)
          : 0;

        statsEl.innerHTML =
          '<span class="tm-stat-chip tm-chip-blue">👥 ' + total + ' Student' + (total !== 1 ? 's' : '') + ' Attempted</span>'
          + '<span class="tm-stat-chip tm-chip-gold">🏆 Top Score: ' + topScore + '</span>'
          + '<span class="tm-stat-chip tm-chip-teal">📊 Avg: ' + avgScore + '</span>';

        if (total === 0) {
          bodyEl.innerHTML = '<p class="tm-empty">No submissions yet — be the first! 🎯</p>';
          return;
        }

        // Table
        var html = '<table class="tm-table">'
          + '<thead><tr>'
          + '<th>Rank</th>'
          + '<th>Name</th>'
          + '<th>Score</th>'
          + '<th>%</th>'
          + '<th>Time</th>'
          + '<th>Date</th>'
          + '</tr></thead>'
          + '<tbody>';

        top15.forEach(function (row, i) {
          var rank    = i + 1;
          var medal   = MEDALS[i] ? MEDALS[i] + ' ' : rank + '. ';
          var name    = escHtml(row[1] || 'Anonymous');
          var score   = row[4] || 0;
          var pct     = row[5] || 0;
          var time    = formatTime(Number(row[6]) || 0);
          var date    = row[0] ? new Date(row[0]).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }) : '—';
          var rowCls  = rank === 1 ? ' class="tm-row-gold"' : rank === 2 ? ' class="tm-row-silver"' : rank === 3 ? ' class="tm-row-bronze"' : '';

          html += '<tr' + rowCls + '>'
            + '<td class="tm-rank">' + medal + '</td>'
            + '<td class="tm-name">' + name + '</td>'
            + '<td class="tm-score">' + score + '</td>'
            + '<td class="tm-pct"><span class="tm-pct-bar" style="--p:' + pct + '%">' + pct + '%</span></td>'
            + '<td class="tm-time">' + time + '</td>'
            + '<td class="tm-date">' + date + '</td>'
            + '</tr>';
        });

        html += '</tbody></table>';

        if (total > 15) {
          html += '<p class="tm-more">+ ' + (total - 15) + ' more students attempted this test</p>';
        }

        bodyEl.innerHTML = html;
      })
      .catch(function (err) {
        statsEl.innerHTML = '<span class="tm-stat-chip">❌ Could not load results</span>';
        bodyEl.innerHTML  = '<p class="tm-empty">Error fetching data. Check your internet connection.</p>';
      });
  };

  // ---- Close modal ----
  window.closeToppers = function (e) {
    if (e && e.target !== document.getElementById('toppers-modal')) return;
    document.getElementById('toppers-modal').classList.remove('open');
    document.body.style.overflow = '';
  };

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeToppers();
  });

  // ---- Skeleton rows ----
  function buildSkeletonRows(n) {
    var html = '<table class="tm-table"><thead><tr><th>Rank</th><th>Name</th><th>Score</th><th>%</th><th>Time</th><th>Date</th></tr></thead><tbody>';
    for (var i = 0; i < n; i++) {
      html += '<tr>'
        + '<td><span class="skel" style="width:28px;height:14px;display:inline-block"></span></td>'
        + '<td><span class="skel" style="width:' + (60 + i * 15) + 'px;height:14px;display:inline-block"></span></td>'
        + '<td><span class="skel" style="width:28px;height:14px;display:inline-block"></span></td>'
        + '<td><span class="skel" style="width:40px;height:14px;display:inline-block"></span></td>'
        + '<td><span class="skel" style="width:50px;height:14px;display:inline-block"></span></td>'
        + '<td><span class="skel" style="width:40px;height:14px;display:inline-block"></span></td>'
        + '</tr>';
    }
    html += '</tbody></table>';
    return html;
  }

  // ---- Helpers ----
  function formatTime(secs) {
    var m = Math.floor(secs / 60);
    var s = secs % 60;
    return m + 'm ' + pad(s) + 's';
  }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ---- Inject all CSS ----
  function injectStyles() {
    if (document.getElementById('hc-home-styles')) return;
    var style = document.createElement('style');
    style.id = 'hc-home-styles';
    style.textContent = `

      /* ── CARD FOOTER BUTTONS ──────────────────────────── */
      .card-btns {
        display: flex; align-items: center; gap: 0.4rem;
      }
      .btn-toppers {
        display: inline-flex; align-items: center; gap: 0.25rem;
        padding: 0.35rem 0.75rem;
        border-radius: 8px;
        font-size: 0.75rem; font-weight: 600;
        cursor: pointer;
        border: 1.5px solid rgba(245,158,11,0.4);
        background: rgba(245,158,11,0.08);
        color: #fbbf24;
        transition: background .2s, border-color .2s, transform .15s;
        font-family: inherit;
      }
      .btn-toppers:hover {
        background: rgba(245,158,11,0.18);
        border-color: rgba(245,158,11,0.7);
        transform: scale(1.04);
      }

      /* ── TOPPERS MODAL OVERLAY ────────────────────────── */
      .tm-overlay {
        display: none;
        position: fixed; inset: 0; z-index: 9999;
        background: rgba(0,0,0,0.75);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        align-items: center; justify-content: center;
        padding: 1rem;
      }
      .tm-overlay.open {
        display: flex;
        animation: tmFadeIn .2s ease;
      }
      @keyframes tmFadeIn {
        from { opacity:0; } to { opacity:1; }
      }

      /* Modal box */
      .tm-box {
        background: #08111c;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 18px;
        width: 100%; max-width: 640px;
        max-height: 88vh;
        display: flex; flex-direction: column;
        overflow: hidden;
        box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(6,182,212,0.15);
        animation: tmSlideUp .25s ease;
      }
      @keyframes tmSlideUp {
        from { transform: translateY(24px); opacity:0; }
        to   { transform: translateY(0);    opacity:1; }
      }

      /* Header */
      .tm-header {
        display: flex; justify-content: space-between; align-items: flex-start;
        padding: 1.2rem 1.4rem 0.8rem;
        border-bottom: 1px solid rgba(255,255,255,0.07);
        flex-shrink: 0;
      }
      .tm-title {
        font-family: 'Syne', sans-serif;
        font-size: 1rem; font-weight: 800;
        color: #f0f6fc; line-height: 1.3;
      }
      .tm-sub {
        font-size: 0.75rem; color: rgba(240,246,252,0.45);
        margin-top: 0.2rem;
      }
      .tm-close {
        background: rgba(255,255,255,0.07);
        border: 1px solid rgba(255,255,255,0.1);
        color: rgba(240,246,252,0.6);
        width: 30px; height: 30px; border-radius: 8px;
        font-size: 0.85rem; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        transition: background .2s, color .2s;
        flex-shrink: 0;
      }
      .tm-close:hover { background: rgba(220,38,38,0.2); color: #f87171; }

      /* Stats strip */
      .tm-stats-strip {
        display: flex; flex-wrap: wrap; gap: 0.5rem;
        padding: 0.8rem 1.4rem;
        border-bottom: 1px solid rgba(255,255,255,0.07);
        flex-shrink: 0;
      }
      .tm-stat-chip {
        display: inline-flex; align-items: center;
        font-size: 0.75rem; font-weight: 600;
        padding: 0.3rem 0.8rem; border-radius: 20px;
      }
      .tm-chip-blue   { background: rgba(37,99,235,0.15);  color: #93c5fd; border: 1px solid rgba(37,99,235,0.25); }
      .tm-chip-gold   { background: rgba(245,158,11,0.12); color: #fcd34d; border: 1px solid rgba(245,158,11,0.25); }
      .tm-chip-teal   { background: rgba(6,182,212,0.1);   color: #67e8f9; border: 1px solid rgba(6,182,212,0.2); }
      .skel-chip      { width: 120px; height: 28px; border-radius: 20px; }

      /* Scrollable body */
      .tm-body {
        overflow-y: auto; flex: 1;
        padding: 0.8rem 1rem 1.2rem;
        scrollbar-width: thin;
        scrollbar-color: rgba(6,182,212,0.3) transparent;
      }
      .tm-body::-webkit-scrollbar { width: 4px; }
      .tm-body::-webkit-scrollbar-track { background: transparent; }
      .tm-body::-webkit-scrollbar-thumb { background: rgba(6,182,212,0.3); border-radius: 2px; }

      /* Table */
      .tm-table {
        width: 100%; border-collapse: collapse;
        font-size: 0.82rem;
      }
      .tm-table thead tr {
        position: sticky; top: 0;
        background: #08111c;
      }
      .tm-table th {
        text-align: left;
        padding: 0.5rem 0.7rem;
        font-size: 0.68rem; font-weight: 700;
        letter-spacing: 0.06em; text-transform: uppercase;
        color: rgba(240,246,252,0.35);
        border-bottom: 1px solid rgba(255,255,255,0.07);
      }
      .tm-table td {
        padding: 0.55rem 0.7rem;
        border-bottom: 1px solid rgba(255,255,255,0.04);
        color: rgba(240,246,252,0.8);
        vertical-align: middle;
      }
      .tm-table tr:last-child td { border-bottom: none; }
      .tm-table tr:hover td { background: rgba(6,182,212,0.04); }

      /* Gold / Silver / Bronze rows */
      .tm-row-gold   td { background: rgba(245,158,11,0.07); }
      .tm-row-silver td { background: rgba(148,163,184,0.05); }
      .tm-row-bronze td { background: rgba(180,83,9,0.05); }
      .tm-row-gold:hover   td { background: rgba(245,158,11,0.12) !important; }
      .tm-row-silver:hover td { background: rgba(148,163,184,0.09) !important; }
      .tm-row-bronze:hover td { background: rgba(180,83,9,0.09) !important; }

      /* Cell styles */
      .tm-rank  { font-size: 1rem; white-space: nowrap; min-width: 48px; }
      .tm-name  { font-weight: 600; color: #f0f6fc; }
      .tm-score { font-weight: 700; color: #67e8f9; text-align: right; }
      .tm-time  { color: rgba(240,246,252,0.4); font-size: 0.72rem; white-space: nowrap; }
      .tm-date  { color: rgba(240,246,252,0.35); font-size: 0.72rem; white-space: nowrap; }

      /* % bar cell */
      .tm-pct-bar {
        display: inline-flex; align-items: center;
        position: relative;
        font-weight: 600; color: #a5f3fc;
        font-size: 0.78rem;
        padding-left: 0;
      }

      /* Empty / more */
      .tm-empty {
        text-align: center; padding: 2.5rem 1rem;
        color: rgba(240,246,252,0.35); font-style: italic; font-size: 0.85rem;
      }
      .tm-more {
        text-align: center; margin-top: 0.8rem;
        font-size: 0.75rem; color: rgba(240,246,252,0.3);
        font-style: italic;
      }

      /* Skeleton */
      .skel {
        border-radius: 4px;
        background: linear-gradient(90deg,
          rgba(255,255,255,0.04) 0%,
          rgba(255,255,255,0.09) 50%,
          rgba(255,255,255,0.04) 100%);
        background-size: 200% 100%;
        animation: shimmer 1.4s infinite;
      }
      @keyframes shimmer {
        0%   { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      /* Responsive */
      @media (max-width: 500px) {
        .tm-box { border-radius: 14px; }
        .tm-table th:nth-child(5),
        .tm-table td:nth-child(5),
        .tm-table th:nth-child(6),
        .tm-table td:nth-child(6) { display: none; }
        .tm-title { font-size: 0.88rem; }
        .card-btns { gap: 0.3rem; }
        .btn-toppers { padding: 0.3rem 0.55rem; font-size: 0.7rem; }
      }
    `;
    document.head.appendChild(style);
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    injectStyles();
    injectModal();
    renderAll();
    updateStats();
    initNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
