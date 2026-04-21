'use client';

import { useState } from 'react';

const quizData = [
  {
    id: 1,
    question: 'What does EVM stand for?',
    options: [
      'Electronic Voting Machine',
      'Election Verification Model',
      'Electronic Vote Manager',
      'Election Virtual Module',
    ],
    correctAnswer: 0,
    explanation: 'EVM (Electronic Voting Machine) is a computerized device used to record votes electronically during elections.',
  },
  {
    id: 2,
    question: 'What is NOTA?',
    options: ['None Of The Above', 'National Online Voting Act', 'Notice Of Tax Amendment', 'No Opposition To Assessment'],
    correctAnswer: 0,
    explanation:
      'NOTA (None Of The Above) is an option that allows voters to register their vote if they do not wish to vote for any candidate.',
  },
  {
    id: 3,
    question: 'At what age can you register as a voter in India?',
    options: ['16 years', '18 years', '21 years', '25 years'],
    correctAnswer: 1,
    explanation: 'In India, you must be at least 18 years old to register as a voter.',
  },
  {
    id: 4,
    question: 'What is the Voter ID called in India?',
    options: ['Electoral Card', 'Voting Permit', 'EPIC (Electoral Photo Identity Card)', 'Citizen Pass'],
    correctAnswer: 2,
    explanation:
      'EPIC stands for Electoral Photo Identity Card. It is an official document issued to registered voters.',
  },
  {
    id: 5,
    question: 'Which body conducts elections in India?',
    options: ['Election Authority', 'Election Commission of India', 'Voting Bureau', 'Central Electoral Office'],
    correctAnswer: 1,
    explanation: 'The Election Commission of India is an independent constitutional body responsible for conducting elections.',
  },
  {
    id: 6,
    question: 'Can voting be done anonymously?',
    options: [
      'No, your name is recorded',
      'Yes, votes are completely secret',
      'Only in digital voting',
      'Names are shown to observers',
    ],
    correctAnswer: 1,
    explanation:
      'Yes, the voting process is secret. Your vote cannot be traced back to you. This is called ballot secrecy.',
  },
  {
    id: 7,
    question: 'What is a constituency?',
    options: [
      'A political party',
      'A geographical area for voting',
      'A type of election',
      'An election officer',
    ],
    correctAnswer: 1,
    explanation: 'A constituency is a geographical area represented by a single elected representative.',
  },
  {
    id: 8,
    question: 'Can NRIs (Non-Resident Indians) vote in Indian elections?',
    options: [
      'No, never',
      'Only if they return to India',
      'Yes, through postal ballot or in-person',
      'Only in local elections',
    ],
    correctAnswer: 2,
    explanation:
      'Yes, NRIs can vote. They can either vote in person at their constituency or through postal ballots if registered.',
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleAnswerClick = (index) => {
    if (answered) return;

    setSelectedAnswer(index);
    setAnswered(true);

    if (index === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage === 100) return { msg: '🎉 Perfect! You are an election expert!', color: 'from-green-600 to-emerald-600' };
    if (percentage >= 80) return { msg: '🌟 Excellent! Great understanding of elections!', color: 'from-blue-600 to-cyan-600' };
    if (percentage >= 60) return { msg: '👍 Good job! You know the basics well!', color: 'from-purple-600 to-pink-600' };
    if (percentage >= 40) return { msg: '📚 Not bad! Keep learning about elections!', color: 'from-orange-600 to-red-600' };
    return { msg: '💪 Keep practicing! You will learn more!', color: 'from-yellow-600 to-orange-600' };
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {showScore ? (
        <div className={`card bg-gradient-to-br ${getScoreMessage().color} text-center p-12 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform`}>
          <div className="text-6xl mb-6 animate-bounce">🏆</div>
          <h2 className="text-4xl font-bold text-white mb-6">Quiz Complete!</h2>
          <div className="text-7xl font-bold text-white mb-4 drop-shadow-lg">
            {score}/{quizData.length}
          </div>
          <p className="text-2xl text-white mb-6 font-semibold">{((score / quizData.length) * 100).toFixed(0)}%</p>
          <p className="text-xl text-white mb-8 drop-shadow">{getScoreMessage().msg}</p>
          <button onClick={resetQuiz} className="btn inline-block text-lg px-8 py-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all">
            🔄 Retake Quiz
          </button>
        </div>
      ) : (
        <div className="card rounded-2xl shadow-2xl p-8 bg-gradient-to-b from-secondary to-primary border border-gray-600">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🧠</span>
                <span className="text-lg font-bold text-gray-300">
                  Question {currentQuestion + 1}/{quizData.length}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-accent to-cyan-500 px-4 py-2 rounded-full">
                <span className="text-yellow-300">⭐</span>
                <span className="font-bold text-white">Score: {score}</span>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
              <div
                className="bg-gradient-to-r from-accent to-cyan-500 h-3 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-white leading-relaxed">
            📌 {quizData[currentQuestion].question}
          </h3>

          <div className="space-y-4 mb-8">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={answered}
                className={`w-full p-5 text-left rounded-xl border-2 transition-all transform hover:scale-105 active:scale-95 ${
                  selectedAnswer === index
                    ? index === quizData[currentQuestion].correctAnswer
                      ? 'border-green-500 bg-gradient-to-r from-green-900 to-emerald-900 text-white shadow-lg shadow-green-500/50'
                      : 'border-red-500 bg-gradient-to-r from-red-900 to-pink-900 text-white shadow-lg shadow-red-500/50'
                    : answered && index === quizData[currentQuestion].correctAnswer
                    ? 'border-green-500 bg-gradient-to-r from-green-900 to-emerald-900 text-white shadow-lg shadow-green-500/50'
                    : 'border-gray-600 bg-secondary hover:border-accent hover:bg-gray-700 cursor-pointer text-gray-200'
                } disabled:cursor-not-allowed`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-bold transition-all ${
                      selectedAnswer === index
                        ? 'border-white bg-white text-black'
                        : 'border-gray-400 text-gray-400'
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {answered && (
            <div className={`p-6 rounded-xl mb-6 border-2 transform animate-slideDown ${
              selectedAnswer === quizData[currentQuestion].correctAnswer
                ? 'bg-gradient-to-r from-green-900 to-emerald-900 border-green-500'
                : 'bg-gradient-to-r from-red-900 to-pink-900 border-red-500'
            }`}>
              <p className="font-bold text-lg mb-2 text-white">
                {selectedAnswer === quizData[currentQuestion].correctAnswer ? '✅ Correct!' : '❌ Incorrect'}
              </p>
              <p className="text-base text-gray-200 leading-relaxed">{quizData[currentQuestion].explanation}</p>
            </div>
          )}

          {answered && (
            <button onClick={handleNextQuestion} className="btn w-full text-lg py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              {currentQuestion === quizData.length - 1 ? '🎯 See Results' : '➡️ Next Question'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
