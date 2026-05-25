# 🪐 Hinde Classes – Student Portal

> **Empowering Futures Through Learning**

A full-featured student portal with Google Login, class-wise Notes/Tests/Videos, and a Points reward system. Backend powered by Google Sheets.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone your repo
git clone https://github.com/YOUR_USERNAME/hinde-classes.git
cd hinde-classes

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Google Client ID and Sheets URL

# 4. Add your logo
# Place your logo file at: public/logo.jpg

# 5. Start development server
npm run dev
# Opens at http://localhost:5173
```

---

## 📦 Tech Stack

| Layer    | Technology |
|----------|-----------|
| Frontend | React 18 + Vite |
| Routing  | React Router v6 |
| Auth     | Google Identity Services |
| Backend  | Google Sheets + Apps Script |
| Hosting  | GitHub Pages / Vercel / Netlify |
| Styles   | CSS Modules |

---

## 🔑 Step 1 – Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project → **"Hinde Classes Portal"**
3. Navigate to **APIs & Services → Credentials**
4. Click **Create Credentials → OAuth 2.0 Client ID**
5. Application type: **Web application**
6. Add **Authorized JavaScript origins**:
   - `http://localhost:5173` (for development)
   - `https://YOUR_USERNAME.github.io` (for production)
   - `https://yourdomain.com` (if custom domain)
7. Copy the **Client ID** → paste into `.env.local`:
   ```
   VITE_GOOGLE_CLIENT_ID=xxxx.apps.googleusercontent.com
   ```
8. Add this script to `index.html` before `</body>`:
   ```html
   <script src="https://accounts.google.com/gsi/client" async defer></script>
   ```

---

## 📊 Step 2 – Google Sheets Backend

### Create the Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com) → Create new sheet
2. Name it **"Hinde Classes DB"**
3. Copy the Sheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/**SHEET_ID_HERE**/edit`

### Create Two Tabs

**Tab 1 – "Students"** (add these headers in Row 1):
```
Email | Name | Avatar | Points | Level | JoinDate | LastLogin | Completed
```

**Tab 2 – "Activity"** (add these headers in Row 1):
```
Email | Action | Points | ItemId | Timestamp
```

### Deploy Apps Script

1. In your Sheet: **Extensions → Apps Script**
2. Delete default code
3. Copy the entire contents of `docs/google-apps-script.js`
4. Paste it into the editor
5. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Sheet ID
6. Click **Deploy → New Deployment**
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy** → Copy the **Web App URL**
8. Paste into `.env.local`:
   ```
   VITE_SHEETS_WEBAPP_URL=https://script.google.com/macros/s/YOUR_ID/exec
   ```

---

## 📤 Step 3 – Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "🚀 Initial commit – Hinde Classes Student Portal"

# Create repo on GitHub (github.com → New Repository → "hinde-classes")
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/hinde-classes.git
git branch -M main
git push -u origin main
```

---

## 🌐 Step 4 – Deploy (Choose One)

### Option A – Vercel (Recommended, Free)

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **Add New Project** → Import `hinde-classes`
3. Framework: **Vite** (auto-detected)
4. Add Environment Variables:
   - `VITE_GOOGLE_CLIENT_ID` = your client ID
   - `VITE_SHEETS_WEBAPP_URL` = your Apps Script URL
5. Click **Deploy** ✅
6. Your URL: `https://hinde-classes.vercel.app`
7. Add this URL to Google OAuth **Authorized origins**

### Option B – GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```
URL: `https://YOUR_USERNAME.github.io/hinde-classes`

### Option C – Netlify

1. [netlify.com](https://netlify.com) → New site from Git
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Site Settings

---

## 🖼️ Add Your Logo

Place your Hinde Classes logo at:
```
public/logo.jpg
```
It will appear in the login page, navbar, and browser tab automatically.

---

## ✏️ Customizing Content

Edit `src/data/content.js` to:
- Add/remove notes, tests, or video entries per class
- Change point values
- Add new subjects per standard
- Update chapter names

---

## 📁 Project Structure

```
hinde-classes/
├── public/
│   └── logo.jpg              ← Add your logo here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← Top navigation bar
│   │   └── Toast.jsx         ← Points notification popup
│   ├── context/
│   │   └── AuthContext.jsx   ← Auth + points state management
│   ├── data/
│   │   └── content.js        ← All notes/tests/videos data
│   ├── pages/
│   │   ├── Login.jsx         ← Google login screen
│   │   ├── Home.jsx          ← Class selection grid
│   │   ├── ClassDetail.jsx   ← Notes/Tests/Videos per class
│   │   └── Points.jsx        ← Points & level page
│   ├── utils/
│   │   └── sheets.js         ← Google Sheets API calls
│   ├── App.jsx               ← Routing
│   ├── main.jsx              ← Entry point
│   └── index.css             ← Global styles
├── docs/
│   └── google-apps-script.js ← Backend code for Google Sheets
├── .env.example              ← Environment variable template
├── index.html
├── package.json
└── vite.config.js
```

---

## ⭐ Points System

| Activity              | Points |
|-----------------------|--------|
| Daily Login           | +5     |
| Read/Download Notes   | +10    |
| Watch a Video         | +15    |
| Complete a Quiz       | +15    |
| Complete a Unit Test  | +30    |
| Complete a Mock Test  | +50    |

| Level     | Points Required |
|-----------|----------------|
| 🌱 Beginner | 0–199 |
| 🔍 Explorer | 200–499 |
| 📚 Scholar  | 500–999 |
| ⚡ Expert   | 1000–1999 |
| 🏆 Master   | 2000+ |

---

## 🛠️ Future Features (Planned)

- [ ] Live MCQ test engine with timer
- [ ] Teacher admin panel to upload content
- [ ] Leaderboard page
- [ ] WhatsApp/SMS notifications
- [ ] PDF viewer embedded in portal
- [ ] Student performance analytics
- [ ] Attendance tracking
- [ ] Parent login view

---

## 📞 Support

Built for **Hinde Classes** – *Empowering Futures Through Learning*
