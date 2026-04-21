# Election Guide AI

An interactive AI-powered educational assistant that helps users understand the election process step-by-step in a simple, engaging, and non-political way.

## 🎯 Features

- **📍 Step-by-Step Learning**: Interactive timeline showing the complete election process from registration to results
- **🤖 AI Chat Assistant**: Ask any election-related questions and get instant, simple answers
- **🧠 Interactive Quizzes**: Test your knowledge with 8 multiple-choice questions and instant feedback
- **🌐 Educational Focus**: Completely neutral, non-political educational content
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- OpenAI API key (for AI chat feature)

### Installation

1. **Clone the repository** (or unzip the project)
   ```bash
   cd Election-Process-Education-2-promptwars
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_api_key_here
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:3000`

## 📂 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js           # AI Chat API endpoint
│   ├── learn/
│   │   └── page.js                # Learning page with timeline
│   ├── chat/
│   │   └── page.js                # Chat interface page
│   ├── quiz/
│   │   └── page.js                # Quiz page
│   ├── page.js                    # Home page
│   ├── layout.js                  # Root layout
│   └── globals.css                # Global styles
├── components/
│   ├── Navigation.js              # Navigation bar
│   ├── Timeline.js                # Election timeline component
│   ├── ChatBox.js                 # Chat interface component
│   └── Quiz.js                    # Quiz component
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 + React 18
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **AI Integration**: OpenAI API (gpt-4o-mini)
- **Language**: JavaScript/JSX

## 📝 Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
OPENAI_API_KEY=your_openai_api_key_here
```

## 🎓 Core Content

### Election Process Steps
1. **Voter Registration** - Register as a voter with required documents
2. **Get Voter ID** - Receive EPIC (Electoral Photo Identity Card)
3. **Campaign Period** - Parties and candidates campaign
4. **Voting Day** - Cast your vote on EVM at polling station
5. **Vote Counting** - All votes are counted and tallied
6. **Results** - Winner declared and forms government

### Key Terms Explained
- **EVM**: Electronic Voting Machine
- **NOTA**: None Of The Above option
- **EPIC**: Electoral Photo Identity Card (Voter ID)
- **Constituency**: Geographical area for voting
- **Polling Station**: Place where you vote
- **AADHAR Slip**: Confirmation slip from EVM

### Quiz Topics
- EVM and voting machines
- NOTA (None Of The Above)
- Voter eligibility and age
- Voter ID documentation
- Election Commission of India
- Voting secrecy
- Constituencies
- NRI voting rights

## 🤖 AI Assistant Capabilities

The AI assistant can answer questions about:
- How to register as a voter
- Voting procedures and requirements
- Election terminology
- Voter rights and responsibilities
- Election mechanics and counting
- Document requirements

## 🎨 Customization

### Colors
Tailwind colors can be customized in `tailwind.config.js`:
- Primary: `#1f2937` (dark gray)
- Secondary: `#374151` (medium gray)
- Accent: `#3b82f6` (blue)

### Content
- Quiz questions: Edit `src/components/Quiz.js`
- Timeline steps: Edit `src/components/Timeline.js`
- AI system prompt: Edit `src/app/api/chat/route.js`

## 📱 Pages

- **Home** (`/`) - Landing page with features and CTAs
- **Learn** (`/learn`) - Election timeline and key terms
- **Ask AI** (`/chat`) - Chat interface with AI assistant
- **Quiz** (`/quiz`) - Interactive knowledge test

## ⚡ Performance Features

- Next.js automatic code splitting
- Client-side components for interactivity
- Optimized images and CSS
- Responsive design for all devices

## 🔒 Non-Political Guarantee

This application is strictly educational and maintains complete neutrality:
- No political opinions or bias
- Educational facts only
- Neutral terminology
- Fair representation of all aspects

## 📖 Usage Examples

### For Students
- Learn about elections for civics class
- Prepare for voting
- Understand electoral processes

### For First-Time Voters
- Understand voting procedures
- Learn about requirements
- Get answers to common questions

### For General Public
- Combat misinformation
- Understand civic processes
- Make informed voting decisions

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
1. Build: `npm run build`
2. Start: `npm run start`
3. Ensure environment variables are set on your hosting platform

## 📞 Support

For issues or questions:
1. Check the "Learn" section for information
2. Use the "Ask AI" feature to get instant answers
3. Review the Quiz for common questions
4. Check official election commission websites for official guidance

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- OpenAI for GPT-4o-mini API
- Next.js team for the excellent framework
- Tailwind CSS for styling utilities

## 🎯 Future Enhancements

- Multi-language support
- Localization for different countries
- Video tutorials
- Visual diagrams and infographics
- User progress tracking
- Accessibility improvements
- Mobile app version

---

**Remember**: This is an educational resource. For official election information, always consult your local election commission's website.
