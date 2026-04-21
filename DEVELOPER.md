# Developer Guide - Extending Election Guide AI

This guide helps you understand the codebase and how to extend Election Guide AI.

---

## 🏗️ Architecture Overview

```
Election Guide AI
├── Frontend (Next.js + React)
│   ├── Pages (Navigation & Layout)
│   ├── Components (Reusable UI)
│   └── Styles (Tailwind CSS)
├── Backend (Next.js API Routes)
│   └── API Endpoints (Chat)
└── Configuration (Environment & Build)
```

---

## 📁 File Structure Explained

### Core Directories

#### `/src/app/`
- **`page.js`**: Home page (landing page)
- **`layout.js`**: Root layout wrapper (HTML structure)
- **`globals.css`**: Global styles and Tailwind imports
- **`api/chat/route.js`**: AI chat API endpoint

#### `/src/components/`
Reusable React components:
- **`Navigation.js`**: Top navigation bar
- **`Timeline.js`**: Election process timeline
- **`ChatBox.js`**: Chat interface
- **`Quiz.js`**: Quiz interface

#### `/src/app/{learn,chat,quiz}/`
Page directories:
- **`learn/page.js`**: Timeline and learning page
- **`chat/page.js`**: Chat interface page
- **`quiz/page.js`**: Quiz page

### Configuration Files

- **`package.json`**: Dependencies and scripts
- **`next.config.js`**: Next.js configuration
- **`tailwind.config.js`**: Tailwind CSS configuration
- **`jsconfig.json`**: Path aliases and compiler options
- **`.env.local`**: Environment variables (secret)
- **`.env.example`**: Example environment variables (public)

---

## 🔄 How to Add New Features

### 1. Add a New Page

**Example**: Add a `/resources` page

1. Create file: `src/app/resources/page.js`
2. Add route to Navigation.js
3. Create the component:

```javascript
'use client';

import Navigation from '@/components/Navigation';

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-primary">
        {/* Your content here */}
      </main>
    </>
  );
}
```

### 2. Add a New Component

**Example**: Add a `Testimonials.js` component

1. Create file: `src/components/Testimonials.js`
2. Make it reusable:

```javascript
'use client';

export default function Testimonials() {
  const testimonials = [
    { name: "John", text: "Great app!" },
    { name: "Sarah", text: "Helped me understand voting!" }
  ];

  return (
    <div className="space-y-4">
      {testimonials.map((t, i) => (
        <div key={i} className="card">
          <p>"{t.text}"</p>
          <p className="text-accent">- {t.name}</p>
        </div>
      ))}
    </div>
  );
}
```

3. Import and use it:
```javascript
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Testimonials />
    </>
  );
}
```

### 3. Add New Quiz Questions

Edit `src/components/Quiz.js`, update `quizData`:

```javascript
const quizData = [
  {
    id: 9,
    question: "What is a by-election?",
    options: [
      "Election held before main election",
      "Election to fill vacant seat",
      "Election held by-road",
      "Secondary election"
    ],
    correctAnswer: 1,
    explanation: "A by-election is held to fill a vacant seat..."
  },
  // ... more questions
];
```

### 4. Add New Timeline Steps

Edit `src/components/Timeline.js`, update `steps`:

```javascript
const steps = [
  {
    id: 1,
    title: "Voter Registration",
    description: "Register yourself as a voter...",
    details: "You need to be 18+ and a citizen..."
  },
  // ... more steps
];
```

### 5. Add a New API Endpoint

**Example**: Add `/api/glossary` endpoint

1. Create file: `src/app/api/glossary/route.js`
2. Add GET handler:

```javascript
export async function GET(req) {
  const glossary = {
    "EVM": "Electronic Voting Machine",
    "NOTA": "None Of The Above",
    "EPIC": "Electoral Photo Identity Card"
  };
  
  return Response.json(glossary);
}
```

3. Use it in a component:

```javascript
const response = await fetch('/api/glossary');
const glossary = await response.json();
```

---

## 🎨 Styling Guide

### Using Tailwind CSS

All styling uses Tailwind CSS classes. Key classes:

```javascript
// Colors
className="text-accent"        // Blue
className="bg-primary"         // Dark gray
className="bg-secondary"       // Medium gray

// Layout
className="flex gap-4"         // Flexbox with gap
className="grid md:grid-cols-2" // Grid, responsive

// Text
className="text-xl font-bold"  // Large bold text
className="text-gray-400"      // Gray text

// Interactive
className="hover:bg-accent"    // Hover effect
className="transition-all"     // Smooth animation

// Custom
className="gradient-text"      // Blue-cyan gradient
className="card"              // Card styling
className="btn"               // Button styling
```

### Adding Custom Styles

Edit `src/app/globals.css`:

```css
.my-custom-class {
  @apply px-4 py-2 bg-accent rounded-lg text-white;
}
```

---

## 🔌 API Integration

### Chat API (`/api/chat`)

**Request**:
```javascript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: "How to vote?" })
});
```

**Response**:
```json
{ "reply": "To vote, you need to register first..." }
```

### System Prompt

Edit the `systemPrompt` in `src/app/api/chat/route.js` to change AI behavior:

```javascript
const systemPrompt = `You are Election Guide AI.
Explain election concepts simply.
Keep answers short.
Be neutral.`;
```

---

## 🧪 Testing

### Manual Testing

1. **Test Chat**:
   - Go to `/chat`
   - Try different questions
   - Check AI responses

2. **Test Quiz**:
   - Go to `/quiz`
   - Answer all questions
   - Verify scoring

3. **Test Timeline**:
   - Go to `/learn`
   - Click each step
   - Verify details show

4. **Test Navigation**:
   - Click all nav links
   - Verify active state
   - Test on mobile view

### Browser Console Testing

Press F12 and check Console for errors.

---

## 🚀 Performance Optimization

### Code Splitting (Automatic)
Next.js automatically splits code per page.

### Image Optimization
Use Next.js Image component:

```javascript
import Image from 'next/image';

<Image src="/election.png" alt="Election" width={400} height={300} />
```

### Dynamic Imports
For heavy components:

```javascript
import dynamic from 'next/dynamic';

const Quiz = dynamic(() => import('@/components/Quiz'), {
  loading: () => <p>Loading...</p>
});
```

---

## 🔒 Security Considerations

### API Key Safety
✅ Store in `.env.local` (not committed)
✅ Never log or expose in frontend
✅ Rotate periodically
❌ Don't hardcode
❌ Don't commit to Git

### Input Validation
Validate all user inputs:

```javascript
const message = req.body.message?.trim();
if (!message) {
  return Response.json({ error: 'Empty message' }, { status: 400 });
}
```

### CORS Handling
Next.js API routes are safe from CORS by default.

---

## 📊 Monitoring & Analytics

### Add Google Analytics

1. Install `next-gtag`:
   ```bash
   npm install next-gtag
   ```

2. Add to `layout.js`:
   ```javascript
   import { GoogleAnalytics } from 'next-gtag';
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics ga_id="G-XXXXXX" />
         </body>
       </html>
     );
   }
   ```

### Track Events
```javascript
import { event } from 'next-gtag';

const handleQuizSubmit = () => {
  event({
    action: 'quiz_submit',
    category: 'learning',
    label: `Score: ${score}`
  });
};
```

---

## 🌍 Multi-Language Support

### Add Translations

1. Create `src/lib/translations.js`:
```javascript
export const translations = {
  en: {
    "home.title": "Election Guide AI",
    "home.description": "Learn about elections..."
  },
  hi: {
    "home.title": "चुनाव गाइड एआई",
    "home.description": "चुनाव के बारे में जानें..."
  }
};
```

2. Create translation hook:
```javascript
'use client';

import { useState } from 'react';
import { translations } from '@/lib/translations';

export function useTranslation() {
  const [lang, setLang] = useState('en');
  
  const t = (key) => translations[lang][key] || key;
  
  return { t, lang, setLang };
}
```

3. Use in components:
```javascript
const { t } = useTranslation();

<h1>{t('home.title')}</h1>
```

---

## 🐛 Debugging Tips

### Debug Chat API
Add logging to `src/app/api/chat/route.js`:

```javascript
console.log('Received message:', message);
console.log('API Key exists:', !!process.env.OPENAI_API_KEY);
console.log('Response:', response);
```

### Check Environment Variables
```javascript
console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
```

### Use React DevTools
Install React DevTools extension in Chrome.

---

## 📚 Component Examples

### Simple Button Component
```javascript
export function CustomButton({ text, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="btn disabled:opacity-50"
    >
      {text}
    </button>
  );
}
```

### Input with Validation
```javascript
export function ValidatedInput({ value, onChange, error }) {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
```

---

## 🔄 State Management

Use React hooks for simple state:

```javascript
import { useState, useEffect } from 'react';

export function MyComponent() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Run when component mounts
    console.log('Component mounted');
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## 🚀 Deployment Checklist

- [ ] All pages tested locally
- [ ] Chat API working with real key
- [ ] Quiz scoring verified
- [ ] Timeline content accurate
- [ ] Mobile responsive design
- [ ] No console errors
- [ ] Environment variables set
- [ ] Production build successful
- [ ] Analytics configured (optional)

---

## 📖 Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Hooks](https://react.dev/reference/react)
- [OpenAI API Docs](https://platform.openai.com/docs)

---

**Happy Coding! 🎉**

Feel free to extend and customize Election Guide AI to meet your needs!
