# 🎓 Election Guide AI - Quick Reference Guide

## 🚀 Quick Start (2 minutes)

### Step 1: Prepare
```bash
cd "C:\Users\Asus\Desktop\Election-Process-Education-2-promptwars"
```

### Step 2: Get API Key
1. Go to https://platform.openai.com/api-keys
2. Create new API key
3. Copy it (save it safely!)

### Step 3: Configure
Edit `.env.local` and paste your key:
```
OPENAI_API_KEY=sk-proj-your-actual-key
```

### Step 4: Run
```bash
npm install
npm run dev
```

### Step 5: Visit
Open `http://localhost:3000` 🎉

---

## 📂 Project Structure at a Glance

```
src/
├── app/                              # Pages (Next.js App Router)
│   ├── page.js                       # Home page
│   ├── layout.js                     # Root layout
│   ├── globals.css                   # Global styles
│   ├── api/chat/route.js             # AI API
│   ├── learn/page.js                 # Timeline page
│   ├── chat/page.js                  # Chat page
│   └── quiz/page.js                  # Quiz page
└── components/                       # Reusable components
    ├── Navigation.js                 # Top nav bar
    ├── Timeline.js                   # Timeline component
    ├── ChatBox.js                    # Chat interface
    └── Quiz.js                       # Quiz component

Config Files:
├── package.json                      # Dependencies
├── next.config.js                    # Next.js settings
├── tailwind.config.js                # Tailwind settings
├── jsconfig.json                     # Path aliases
├── .env.local                        # Your API key (secret)
└── .env.example                      # Example vars (public)
```

---

## 🎯 Features Quick Reference

### Home Page (/)
- Landing page with overview
- Feature cards
- FAQ section
- Call-to-action buttons

### Learn Page (/learn)
- 6-step election timeline
- Expandable step details
- Key terms explained
- Voting tips

### Chat Page (/chat)
- AI assistant chat
- Message history
- Typing indicator
- Error handling

### Quiz Page (/quiz)
- 8 multiple choice questions
- Instant feedback
- Score calculation
- Explanations

---

## 🔧 Common Tasks

### Change Quiz Questions
**File**: `src/components/Quiz.js`
```javascript
const quizData = [
  {
    id: 1,
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: 0,  // Index of correct option
    explanation: "Why this is correct..."
  }
];
```

### Update Timeline Steps
**File**: `src/components/Timeline.js`
```javascript
const steps = [
  {
    id: 1,
    title: "Step Title",
    description: "Short description",
    details: "Detailed explanation"
  }
];
```

### Change Colors
**File**: `tailwind.config.js`
```javascript
colors: {
  primary: "#1f2937",    // Dark gray
  secondary: "#374151",  // Medium gray
  accent: "#3b82f6",     // Blue
}
```

### Customize AI Behavior
**File**: `src/app/api/chat/route.js`
```javascript
const systemPrompt = `
  You are Election Guide AI.
  Explain simply and neutrally.
  Keep responses short.
`;
```

---

## 📊 File Locations

| Feature | File |
|---------|------|
| Home Page | `src/app/page.js` |
| Learn Timeline | `src/components/Timeline.js` |
| Chat Interface | `src/components/ChatBox.js` |
| Quiz | `src/components/Quiz.js` |
| AI API | `src/app/api/chat/route.js` |
| Navigation | `src/components/Navigation.js` |
| Styling | `src/app/globals.css` |
| Colors | `tailwind.config.js` |
| Environment | `.env.local` |

---

## 🌐 URLs & Routes

| Page | URL | Component |
|------|-----|-----------|
| Home | `/` | `src/app/page.js` |
| Learn | `/learn` | `src/app/learn/page.js` |
| Chat | `/chat` | `src/app/chat/page.js` |
| Quiz | `/quiz` | `src/app/quiz/page.js` |
| API | `/api/chat` | `src/app/api/chat/route.js` |

---

## 🎨 CSS Classes

### Ready-to-Use Classes
```javascript
className="card"              // Card styling
className="btn"               // Blue button
className="btn-outline"       // Outline button
className="gradient-text"     // Blue-cyan gradient text
className="text-accent"       // Blue text
className="bg-primary"        // Dark gray bg
className="bg-secondary"      // Medium gray bg
```

---

## ✅ Testing Checklist

1. **Home**: Click all CTA buttons
2. **Learn**: Click all timeline steps
3. **Chat**: Send a message, get response
4. **Quiz**: Answer all questions, verify score
5. **Navigation**: Test all nav links
6. **Mobile**: Check on phone (F12 → responsive)
7. **Console**: No red errors (F12 → console)

---

## 🚀 Deployment

### Vercel (Easiest)
1. Push to GitHub
2. Go to vercel.com
3. Import repo
4. Add `OPENAI_API_KEY` environment variable
5. Deploy! ✅

### Others
- Netlify
- Railway  
- Docker
- Traditional Node hosting

See SETUP.md for detailed instructions.

---

## 🐛 Quick Fixes

### Chat not working?
→ Check `.env.local` has your API key

### Build fails?
→ Delete `node_modules` & `npm install` again

### Port in use?
→ `npm run dev -- -p 3001`

### Styling weird?
→ Delete `.next` folder & rebuild

---

## 📚 Documentation Files

- **README.md** - Main overview
- **SETUP.md** - Setup & deployment
- **DEVELOPER.md** - For customizing
- **CHECKLIST.md** - Pre-launch checklist
- **PROJECT_OVERVIEW.md** - Complete docs
- **QUICK_REFERENCE.md** - This file!

---

## 💡 Pro Tips

1. **Use `.env.local`** for secrets (not `.env`)
2. **Test locally** before deploying
3. **Check console** (F12) for errors
4. **Monitor API usage** on OpenAI dashboard
5. **Rotate API keys** periodically
6. **Keep dependencies** updated: `npm update`
7. **Use relative imports** with `@/` alias

---

## 🎯 What's Included

✅ 4 full pages (Home, Learn, Chat, Quiz)
✅ 4 reusable components
✅ AI chat integration
✅ 6-step timeline
✅ 8-question quiz
✅ Dark theme with gradients
✅ Mobile responsive
✅ Production-ready code
✅ Complete documentation
✅ Deployment ready

---

## 📞 Getting Help

1. **Setup issues** → Read SETUP.md
2. **Code questions** → Check DEVELOPER.md
3. **Can't start** → Review CHECKLIST.md
4. **Feature request** → See PROJECT_OVERVIEW.md

---

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [OpenAI Docs](https://platform.openai.com/docs)

---

## 📝 Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Windows quick start
START.bat

# Mac/Linux quick start
./start.sh
```

---

## 🔐 Security Quick Check

✅ API key in `.env.local` (not committed)
✅ Environment variables configured
✅ No secrets in source code
✅ Error handling implemented
✅ Input validation working

---

## 📈 Success Metrics

- ✓ Quiz completion rate
- ✓ Average session time
- ✓ Timeline step completion
- ✓ Chat interaction count
- ✓ Return visitor rate

---

## 🎉 You're All Set!

Your Election Guide AI is **ready to go**. 

### Next Steps:
1. ✅ Install dependencies
2. ✅ Add API key
3. ✅ Run locally
4. ✅ Test features
5. ✅ Deploy when ready

---

**Happy coding! 🚀**

For more details, see the other documentation files.
