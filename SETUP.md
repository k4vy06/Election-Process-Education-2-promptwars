# Election Guide AI - Setup & Deployment Guide

## 🚀 Getting Started

This guide will help you set up and run the Election Guide AI application locally and deploy it to production.

---

## Step 1: Prerequisites

Make sure you have the following installed:
- **Node.js** 18.x or higher ([download](https://nodejs.org/))
- **npm** 9.x or higher (comes with Node.js)
- **Git** (optional, for version control)

To check your versions:
```bash
node --version
npm --version
```

---

## Step 2: Setup OpenAI API

The AI chat feature requires an OpenAI API key.

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in with your account
3. Create a new API key
4. Copy the key (you won't be able to see it again!)
5. **Important**: Keep this key private and never share it

---

## Step 3: Local Installation

### 3.1 Clone/Download the Project
```bash
cd "C:\Users\Asus\Desktop\Election-Process-Education-2-promptwars"
```

### 3.2 Install Dependencies
```bash
npm install
```

This will download and install all required packages (React, Next.js, Tailwind CSS, etc.)

### 3.3 Configure Environment Variables

1. Edit `.env.local` file in the project root
2. Replace `your_api_key_here` with your actual OpenAI API key:
   ```
   OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxx
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

**Security Tip**: Never commit `.env.local` to version control. It's in `.gitignore` for safety.

### 3.4 Start Development Server
```bash
npm run dev
```

You should see:
```
  ▲ Next.js 15.x.x
  - Local:        http://localhost:3000
```

### 3.5 Open in Browser
- Go to `http://localhost:3000`
- Click on different sections to test:
  - **Home**: Main landing page
  - **Learn**: Election timeline
  - **Ask AI**: Chat with the assistant
  - **Quiz**: Take the knowledge quiz

---

## Step 4: Testing

### Test the Chat Feature
1. Go to "Ask AI"
2. Type a question like: "How do I register as a voter?"
3. You should get a response from the AI

### Test the Quiz
1. Go to "Quiz"
2. Answer all 8 questions
3. Check your score and explanations

### Test the Timeline
1. Go to "Learn"
2. Click on each step to see details

---

## Step 5: Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#1f2937",    // Change dark gray
  secondary: "#374151",  // Change medium gray
  accent: "#3b82f6",     // Change blue
}
```

### Update Quiz Questions
Edit `src/components/Quiz.js` - modify the `quizData` array

### Update Timeline Steps
Edit `src/components/Timeline.js` - modify the `steps` array

### Update AI System Prompt
Edit `src/app/api/chat/route.js` - modify the `systemPrompt` variable

---

## Step 6: Building for Production

### Build the Application
```bash
npm run build
```

This creates an optimized production build in `.next/` folder.

### Test Production Build Locally
```bash
npm start
```

Access at `http://localhost:3000`

---

## Step 7: Deployment Options

### Option A: Deploy to Vercel (Easiest & Free)

**Prerequisites**:
- GitHub account (Vercel works best with GitHub)
- Vercel account (free at [vercel.com](https://vercel.com))

**Steps**:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/election-guide-ai.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select "Election-Guide-AI" project

3. **Set Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add:
     - `OPENAI_API_KEY` = your-api-key
     - `NEXT_PUBLIC_API_URL` = your-vercel-domain.vercel.app

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app is live! 🎉

**Access Your Live App**:
- Vercel will give you a URL like: `https://election-guide-ai.vercel.app`

### Option B: Deploy to Netlify

1. Build the project: `npm run build`
2. Create `netlify.toml`:
   ```toml
   [build]
   command = "npm run build"
   functions = "/.next/functions"
   
   [[redirects]]
   from = "/*"
   to = "/.next/server/pages/404.html"
   status = 404
   ```
3. Connect to Netlify via Git
4. Set environment variables in Netlify dashboard
5. Deploy!

### Option C: Deploy to Railway

1. Connect GitHub repository
2. Set environment variables
3. Set start command: `npm start`
4. Deploy!

### Option D: Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t election-guide-ai .
docker run -p 3000:3000 -e OPENAI_API_KEY=your_key election-guide-ai
```

---

## Step 8: Monitoring & Maintenance

### Check for Errors
- Check browser console (F12 → Console tab)
- Check server logs in terminal

### Monitor API Usage
- Go to [OpenAI Platform](https://platform.openai.com/account/usage/overview)
- Monitor your API usage and costs

### Update Dependencies
```bash
npm update
```

### Check for Security Issues
```bash
npm audit
```

---

## Troubleshooting

### Issue: "Module not found" errors
**Solution**: Run `npm install` again
```bash
rm -r node_modules package-lock.json
npm install
```

### Issue: Chat not working / "API key error"
**Solutions**:
1. Check `.env.local` has correct API key
2. Make sure API key has API access enabled
3. Verify you haven't exceeded API quota

### Issue: "Port 3000 already in use"
**Solution**: Use a different port
```bash
npm run dev -- -p 3001
```

### Issue: Build fails on Vercel
**Solutions**:
1. Check environment variables are set correctly
2. View build logs in Vercel dashboard
3. Ensure Node.js version is 18+

### Issue: Slow API responses
**Solutions**:
1. Check internet connection
2. OpenAI API might be slow (check status at [status.openai.com](https://status.openai.com))
3. Consider upgrading OpenAI plan for faster responses

---

## Performance Tips

1. **Cache API Responses**: Store frequent questions and answers
2. **Optimize Images**: Use Next.js Image component
3. **Code Splitting**: Next.js handles this automatically
4. **Monitor Performance**: Use Vercel Analytics

---

## Security Best Practices

1. ✅ Never commit `.env.local` to Git
2. ✅ Use environment variables for all secrets
3. ✅ Rotate API keys periodically
4. ✅ Monitor API usage regularly
5. ✅ Use HTTPS in production (Vercel does this automatically)
6. ✅ Keep dependencies updated

---

## Cost Estimation

### OpenAI API Costs
- Chat completions with gpt-4o-mini: ~$0.00015 per 1K input tokens
- Estimated monthly cost for 1000 queries: ~$2-5 (varies)

### Hosting Costs
- **Vercel**: Free tier available, then $20+/month
- **Netlify**: Free tier available, then $19+/month
- **Railway**: Pay-as-you-go, starting at $5/month

---

## Next Steps

1. ✅ Set up locally (Steps 1-4)
2. ✅ Customize content (Step 5)
3. ✅ Test thoroughly (Step 4)
4. ✅ Deploy to production (Step 7)
5. ✅ Monitor usage (Step 8)

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## Support & Help

- **Documentation**: Check README.md
- **API Issues**: OpenAI Support
- **Deployment Issues**: Vercel/Netlify Support
- **Code Issues**: Check browser console (F12)

---

**Happy Learning! 🎉**

Make sure to test everything locally before deploying to production!
