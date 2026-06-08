// ============================================================
// HINDE CLASSES — admin.js
// Fetches results from Google Sheets and renders merit tables
// ============================================================

(function () {

  var currentTestId = null;

  // ---- Build sidebar ----
  function buildSidebar() {
    var categories = [
      { label: '📚 Class Tests',        tests: CLASS_TESTS },
      { label: '📖 Subject Mocks',       tests: SUBJECT_TESTS },
      { label: '🧮 Olympiad',            tests: OLYMPIAD_TESTS },
      { label: '🏅 Scholarship',         tests: SCHOLARSHIP_TESTS },
      { label: '📅 Daily Quiz',          tests: DAILY_QUIZ },
      { label: '🏫 Board Special',       tests: SPECIAL_TESTS }
    ];

    var html = '';
    categories.forEach(function (cat) {
      html += '<div class="sidebar-cat">' + cat.label + '</div>';
      cat.tests.forEach(function (t) {
        html += '<div class="sidebar-item' + (t.live ? '' : ' dim') + '" onclick="window.loadTest(\'' + t.id + '\')">'
          + '<span class="si-title">' + t.title + '</span>'
          + '<span class="si-badge ' + (t.live ? 'live' : 'soon') + '">' + (t.live ? 'Live' : 'Soon') + '</span>'
          + '</div>';
      });
    });

    var el = document.getElementById('sidebar-list');
    if (el) el.innerHTML = html;
  }

  // ---- Load a test's results ----
  window.loadTest = function (testId) {
    currentTestId = testId;

    // Highlight sidebar
    document.querySelectorAll('.sidebar-item').forEach(function (el) {
      el.classList.remove('active');
    });
    event && event.currentTarget && event.currentTarget.classList.add('active');

    // Show main panel
    document.getElementById('main-panel').style.display = '';
    document.getElementById('placeholder').style.display = 'none';
    document.getElementById('loading-msg').style.display = '';
    document.getElementById('results-area').style.display = 'none';
    document.getElementById('panel-title').textContent = '⏳ Loading...';

    fetchResults(testId);
  };

  // ---- Fetch results ----
  function fetchResults(testId) {
    var url = SCRIPT_URL + '?action=read&testId=' + encodeURIComponent(testId);
    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) { renderResults(testId, data.rows || []); })
      .catch(function (err) {
        document.getElementById('loading-msg').textContent = '❌ Error loading results: ' + err.message;
      });
  }

  // ---- Render results ----
  function renderResults(testId, rows) {
    var allTests = [].concat(CLASS_TESTS, SUBJECT_TESTS, OLYMPIAD_TESTS, SCHOLARSHIP_TESTS, DAILY_QUIZ, SPECIAL_TESTS);
    var testConfig = allTests.find(function (t) { return t.id === testId; });

    document.getElementById('loading-msg').style.display = 'none';
    document.getElementById('results-area').style.display = '';
    document.getElementById('panel-title').textContent = testConfig ? testConfig.title : testId;

    if (rows.length === 0) {
      document.getElementById('results-area').innerHTML = '<p class="empty-note">No submissions yet for this test.</p>';
      return;
    }

    // Sort by total desc
    rows.sort(function (a, b) { return Number(b[4]) - Number(a[4]); });

    // Stats
    var totals = rows.map(function (r) { return Number(r[4]) || 0; });
    var sum = totals.reduce(function (a, b) { return a + b; }, 0);
    var avg = (sum / totals.length).toFixed(1);
    var top = Math.max.apply(null, totals);
    var pass = totals.filter(function (s) { return s >= (testConfig ? testConfig.totalMarks * 0.33 : 0); }).length;

    document.getElementById('stats-row').innerHTML =
      '<div class="stat-box"><strong>' + rows.length + '</strong><span>Submissions</span></div>'
      + '<div class="stat-box"><strong>' + top + '</strong><span>Top Score</span></div>'
      + '<div class="stat-box"><strong>' + avg + '</strong><span>Avg Score</span></div>'
      + '<div class="stat-box"><strong>' + pass + '</strong><span>Passed (33%+)</span></div>';

    // Table
    var tableHtml = '<table class="merit-table">'
      + '<thead><tr><th>Rank</th><th>Name</th><th>Score</th><th>%</th><th>Time</th><th>Submitted</th></tr></thead>'
      + '<tbody>';

    rows.forEach(function (row, i) {
      var rank = i + 1;
      var medal = rank === 1 ? '🥇 ' : rank === 2 ? '🥈 ' : rank === 3 ? '🥉 ' : '';
      var name = row[1] || '—';
      var score = row[4] || 0;
      var pct = row[5] || 0;
      var time = formatTime(Number(row[6]) || 0);
      var ts = row[0] ? new Date(row[0]).toLocaleDateString('en-IN', { day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit' }) : '—';

      tableHtml += '<tr class="' + (rank <= 3 ? 'top-row' : '') + '">'
        + '<td>' + medal + rank + '</td>'
        + '<td class="name-cell">' + name + '</td>'
        + '<td><strong>' + score + '</strong></td>'
        + '<td>' + pct + '%</td>'
        + '<td>' + time + '</td>'
        + '<td>' + ts + '</td>'
        + '</tr>';
    });

    tableHtml += '</tbody></table>';
    document.getElementById('merit-table-wrap').innerHTML = tableHtml;

    // Store rows for CSV export
    window._currentRows = rows;
    window._currentTestId = testId;
  }

  // ---- Refresh ----
  window.refreshResults = function () {
    if (!currentTestId) return;
    document.getElementById('loading-msg').style.display = '';
    document.getElementById('results-area').style.display = 'none';
    fetchResults(currentTestId);
  };

  // ---- Export CSV ----
  window.exportCSV = function () {
    var rows = window._currentRows;
    if (!rows || rows.length === 0) { alert('No data to export.'); return; }
    var csv = 'Rank,Name,TestID,ScoresJSON,Score,Percent,TimeTaken,Timestamp\n';
    rows.forEach(function (row, i) {
      csv += (i + 1) + ',' + row.map(function (c) { return '"' + String(c).replace(/"/g, '""') + '"'; }).join(',') + '\n';
    });
    var blob = new Blob([csv], { type: 'text/csv' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = (window._currentTestId || 'results') + '.csv';
    a.click(); URL.revokeObjectURL(url);
  };

  function formatTime(secs) {
    var m = Math.floor(secs / 60), s = secs % 60;
    return m + 'm ' + pad(s) + 's';
  }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  // ---- Init ----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildSidebar);
  } else {
    buildSidebar();
  }

})();
