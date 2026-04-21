'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi! I'm Election Guide AI. Ask me anything about the election process, voting methods, or election terms. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: 'bot',
            text: 'Sorry, I encountered an error. Please make sure your API key is configured correctly.',
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: 'bot',
            text: data.reply,
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: 'bot',
          text: 'Failed to connect to the AI. Please check your connection.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col h-screen md:h-[650px] bg-gradient-to-b from-secondary to-primary rounded-2xl shadow-2xl overflow-hidden border border-gray-600">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-cyan-500 p-6 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🤖</div>
          <div>
            <h2 className="text-2xl font-bold text-white">Election Guide AI</h2>
            <p className="text-blue-100 text-sm">Ask anything about elections & voting</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {messages.map((msg, idx) => (
          <div
            key={msg.id}
            className={`flex gap-3 animate-fadeIn ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {msg.type === 'bot' && <div className="text-2xl flex-shrink-0">🎓</div>}
            <div
              className={`max-w-xs lg:max-w-md px-5 py-3 rounded-2xl transition-all duration-300 hover:shadow-lg ${
                msg.type === 'user'
                  ? 'bg-gradient-to-br from-accent to-blue-600 text-white rounded-br-none shadow-md'
                  : 'bg-gradient-to-br from-primary to-gray-700 text-gray-100 rounded-bl-none border border-gray-500'
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start gap-3 animate-fadeIn">
            <div className="text-2xl">🎓</div>
            <div className="bg-gradient-to-br from-primary to-gray-700 text-gray-400 px-5 py-3 rounded-2xl rounded-bl-none border border-gray-500">
              <div className="flex gap-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-600 p-5 bg-primary rounded-b-2xl backdrop-blur-md">
        <div className="flex gap-3 mb-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="🔍 Ask me about voting, EVM, NOTA, or any election term..."
            disabled={loading}
            className="flex-1 bg-secondary text-white rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 border border-gray-600 hover:border-gray-500 transition-colors"
            rows="2"
          />
          <button
            onClick={handleSendMessage}
            disabled={loading || !input.trim()}
            className="btn h-fit px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            ✉️ Send
          </button>
        </div>
        <p className="text-xs text-gray-500 text-center">⌨️ Press Enter to send • Shift+Enter for new line</p>
      </div>
    </div>
  );
}
