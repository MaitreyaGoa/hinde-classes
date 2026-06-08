// ============================================================
// HINDE CLASSES — Google Apps Script (Code.gs)
// Deploy as: Web App → Execute as: Me → Access: Anyone
//
// Replace YOUR_SHEET_ID below with your Google Sheet's ID
// (found in the spreadsheet URL between /d/ and /edit)
// ============================================================

var SHEET_ID = "YOUR_SHEET_ID";

// ============================================================
// doGet — main handler
// ============================================================
function doGet(e) {
  var action = e.parameter.action;
  var testId = e.parameter.testId;

  try {
    if (action === "submit") {
      return handleSubmit(e);
    } else if (action === "read") {
      return handleRead(e);
    } else {
      return jsonResponse({ status: "error", message: "Unknown action: " + action });
    }
  } catch (err) {
    return jsonResponse({ status: "error", message: err.toString() });
  }
}

// ============================================================
// handleSubmit — write result row to sheet tab
// Params: testId, name, scores, total, percent, timeTaken
// ============================================================
function handleSubmit(e) {
  var testId    = e.parameter.testId    || "unknown";
  var name      = e.parameter.name      || "Anonymous";
  var scores    = e.parameter.scores    || "{}";
  var total     = e.parameter.total     || "0";
  var percent   = e.parameter.percent   || "0";
  var timeTaken = e.parameter.timeTaken || "0";

  var ss    = SpreadsheetApp.openById(SHEET_ID);
  var sheet = getOrCreateSheet(ss, testId);

  // Add header row if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp", "Name", "TestID", "ScoresJSON",
      "Total", "Percent", "TimeTaken"
    ]);
    // Freeze header
    sheet.setFrozenRows(1);
    // Bold header
    sheet.getRange(1, 1, 1, 7).setFontWeight("bold");
  }

  // Append data row
  sheet.appendRow([
    new Date().toISOString(),
    name,
    testId,
    scores,
    Number(total),
    Number(percent),
    Number(timeTaken)
  ]);

  return jsonResponse({ status: "ok", message: "Result saved for " + name });
}

// ============================================================
// handleRead — read all rows for testId, return sorted JSON
// ============================================================
function handleRead(e) {
  var testId = e.parameter.testId || "unknown";

  var ss = SpreadsheetApp.openById(SHEET_ID);

  // Check if sheet exists
  var sheet = ss.getSheetByName(testId);
  if (!sheet || sheet.getLastRow() <= 1) {
    return jsonResponse({ status: "ok", testId: testId, rows: [] });
  }

  // Get all data rows (skip header row 1)
  var data = sheet.getDataRange().getValues();
  var rows = [];

  for (var i = 1; i < data.length; i++) {
    rows.push(data[i]);
  }

  // Sort by Total (column index 4) descending
  rows.sort(function (a, b) {
    return Number(b[4]) - Number(a[4]);
  });

  return jsonResponse({ status: "ok", testId: testId, rows: rows });
}

// ============================================================
// Helper: Get or create sheet tab by name (testId)
// ============================================================
function getOrCreateSheet(ss, name) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  return sheet;
}

// ============================================================
// Helper: Return JSON with CORS headers
// ============================================================
function jsonResponse(obj) {
  var output = ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}

// ============================================================
// DEPLOYMENT INSTRUCTIONS
// ============================================================
// 1. Open Google Sheets → Extensions → Apps Script
// 2. Paste this entire file into Code.gs
// 3. Replace YOUR_SHEET_ID with your spreadsheet ID
// 4. Click Deploy → New Deployment
//    - Type: Web App
//    - Execute as: Me (your Google account)
//    - Who has access: Anyone
// 5. Copy the deployment URL
// 6. Paste it into config.js as SCRIPT_URL value
// 7. Done! Each test auto-creates its own sheet tab.
// ============================================================
