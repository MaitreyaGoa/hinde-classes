// ============================================================
//  HINDE CLASSES – Google Sheets Backend
//  
//  Setup instructions:
//  1. Create a Google Sheet with these tabs:
//     - "Students"  → columns: Email, Name, Points, Level, JoinDate, LastLogin
//     - "Activity"  → columns: Email, Action, Points, ItemId, Timestamp
//  2. Deploy a Google Apps Script as Web App (see docs/google-apps-script.js)
//  3. Paste the deployed Web App URL below
// ============================================================

const SHEETS_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbw7MoOf6rbOdZNTb1onE40mJ6H6zhhO4oQsIVh0pajzMpb81FMVXkoTcRFcDcU8KtBJ/exec'

async function sheetsRequest(action, payload = {}) {
  if (!SHEETS_WEBAPP_URL) {
    console.warn('[Sheets] VITE_SHEETS_WEBAPP_URL not set – running in local-only mode')
    return null
  }
  try {
    const res = await fetch(SHEETS_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...payload }),
    })
    return await res.json()
  } catch (err) {
    console.error('[Sheets] Request failed:', err)
    return null
  }
}

// Register or fetch a student by email
export async function upsertStudent({ email, name, avatar }) {
  return sheetsRequest('upsertStudent', { email, name, avatar })
}

// Fetch student data (points, completed items, etc.)
export async function fetchStudent(email) {
  return sheetsRequest('fetchStudent', { email })
}

// Log a point-earning activity
export async function logActivity({ email, action, pts, itemId }) {
  return sheetsRequest('logActivity', { email, action, pts, itemId })
}

// Update student total points
export async function updatePoints({ email, points }) {
  return sheetsRequest('updatePoints', { email, points })
}

// Save completed item IDs (serialized JSON array)
export async function saveCompleted({ email, completed }) {
  return sheetsRequest('saveCompleted', { email, completed: JSON.stringify([...completed]) })
}

// Fetch leaderboard (top 20 students by points)
export async function fetchLeaderboard() {
  return sheetsRequest('leaderboard')
}
