export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || message.trim() === '') {
      return Response.json(
        { error: 'Message cannot be empty' },
        { status: 400 }
      );
    }

    // Knowledge base of common questions and answers
    const knowledgeBase = {
      'register': {
        keywords: ['register', 'registration', 'how to', 'become voter'],
        answer: 'To register as a voter: 1) Visit your local election office or go to election.eci.gov.in 2) Fill Form 6 (new voter registration) 3) Provide proof of citizenship and residence 4) Submit documents 5) Receive Voter ID (EPIC) after verification. Registration is free and open to all citizens aged 18+.'
      },
      'evm': {
        keywords: ['evm', 'electronic', 'voting machine', 'what is evm'],
        answer: 'EVM stands for Electronic Voting Machine. It\'s a computerized device that records votes electronically. Benefits: Speeds up counting, reduces errors, prevents duplicate voting, ensures accuracy. Results are verified through VVPAT (Voter Verified Paper Audit Trail) slips for complete transparency.'
      },
      'documents': {
        keywords: ['documents', 'id proof', 'papers', 'what documents', 'needed'],
        answer: 'Documents needed for voting: 1) Voter ID (EPIC) - most important 2) Aadhaar Card 3) PAN Card 4) Passport 5) Driving License 6) Utility bills. You need at least one valid ID proof. If you don\'t have a Voter ID, bring any two of the above documents to your polling station.'
      },
      'nota': {
        keywords: ['nota', 'none of the above', 'what is nota', 'reject'],
        answer: 'NOTA stands for "None Of The Above." It gives voters the right to reject all candidates. How to use: In the EVM, press the RED button labeled "NOTA" after all candidate buttons. NOTA votes are counted separately and represent public dissent. You can use NOTA if no candidate matches your values.'
      },
      'votes counted': {
        keywords: ['counted', 'counting', 'how votes', 'vote count'],
        answer: 'Vote counting process: 1) Counting begins after polling stations close (usually 48 hours later) 2) Each EVM is opened with poll observers present 3) Votes are electronically tallied from EVM memory 4) VVPAT slips are manually counted for verification 5) Results are announced. The entire process is transparent and observed by all parties.'
      },
      'another city': {
        keywords: ['another city', 'different place', 'can i vote', 'away', 'out of station'],
        answer: 'You can vote in another city by: 1) Filing for postal ballot 48 hours before voting if you\'ll be away 2) Applying for "leave out" facility if allowed by your election office 3) Changing your voter registration to your current city before elections. Visit your local election office to update your registered address for future elections.'
      }
    };

    // Function to find best matching answer
    const findAnswer = (question) => {
      const lowerQuestion = question.toLowerCase();
      
      for (const [key, data] of Object.entries(knowledgeBase)) {
        for (const keyword of data.keywords) {
          if (lowerQuestion.includes(keyword)) {
            return data.answer;
          }
        }
      }

      // Fallback for unmatched questions
      return "I appreciate your question! While I don't have a specific answer in my database, I recommend visiting election.eci.gov.in or contacting your local election office for the most accurate information. Is there anything else about elections I can help with?";
    };

    const reply = findAnswer(message);

    return Response.json({
      reply: reply,
      success: true,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'Failed to process your message', success: false },
      { status: 500 }
    );
  }
}
