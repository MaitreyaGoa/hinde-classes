// ============================================================
// HINDE CLASSES — home.js
// Renders test cards from config.js arrays
// Handles sub-section routing for CLASS_TESTS
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

    var mins = Math.floor((test.duration || 0) / 60);
    var startBtn = test.live
      ? '<a class="btn-start" href="test.html?id=' + test.id + '">Start Test →</a>'
      : '<span class="btn-disabled">Coming Soon</span>';

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
      + startBtn
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
    // CLASS_TESTS — routed by class into sub-sections
    routeClassTests();

    // SUBJECT_TESTS
    renderSection('subject-tests-grid', SUBJECT_TESTS, 'SUBJECT_TESTS');

    // OLYMPIAD — Maths
    var olmMaths = OLYMPIAD_TESTS.filter(function (t) { return t.subject === 'Maths'; });
    renderSection('sec-olm-grid', olmMaths, 'OLYMPIAD_TESTS');

    // OLYMPIAD — Science
    var olmSci = OLYMPIAD_TESTS.filter(function (t) { return t.subject === 'Science'; });
    renderSection('sec-olsci-grid', olmSci, 'OLYMPIAD_TESTS');

    // SCHOLARSHIP_TESTS
    renderSection('sec-scholar-grid', SCHOLARSHIP_TESTS, 'SCHOLARSHIP_TESTS');

    // DAILY_QUIZ
    renderSection('sec-daily-grid', DAILY_QUIZ, 'DAILY_QUIZ');

    // SPECIAL_TESTS
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

  // ---- Run on DOM ready ----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      renderAll();
      updateStats();
      initNav();
    });
  } else {
    renderAll();
    updateStats();
    initNav();
  }

})();
