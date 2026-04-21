'use client';

import Navigation from '@/components/Navigation';
import ChatBox from '@/components/ChatBox';
import { useTranslation } from '@/hooks/useTranslation';

export default function ChatPage() {
  const { t, language } = useTranslation();
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-primary">
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8 text-center">
            <div className="text-5xl mb-4">🤖</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-saffron via-gray-100 to-bharat_green bg-clip-text text-transparent">{t('chat.title')}</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t('chat.description')}
            </p>
          </div>

          <ChatBox />

          {/* Sample Questions */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-saffron to-bharat_green bg-clip-text text-transparent">❓ {t('chat.popularQuestions')}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                t('chat.q1'),
                t('chat.q2'),
                t('chat.q3'),
                t('chat.q4'),
                t('chat.q5'),
                t('chat.q6'),
              ].map((q, i) => (
                <div key={i} className="card cursor-pointer hover:ring-2 hover:ring-saffron transition-all group">
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">{q}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Info Box */}
          <section className="mt-12 bg-gradient-to-r from-saffron/10 via-secondary to-bharat_green/10 rounded-xl p-8 border border-saffron/30">
            <h3 className="font-bold text-saffron mb-3 text-lg">💡 {t('chat.tips')}</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• {t('chat.tip1')}</li>
              <li>• {t('chat.tip2')}</li>
              <li>• {t('chat.tip3')}</li>
              <li>• {t('chat.tip4')}</li>
              <li>• {t('chat.tip5')}</li>
            </ul>
          </section>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-saffron/20 via-primary to-bharat_green/20 border-t border-saffron/30 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2 text-gray-400 text-sm">
          <p className="font-semibold">⚖️ 🇮🇳 {language === 'en' ? 'Election Guide AI © 2024' : 'भारतीय चुनाव AI © 2024'}</p>
          <p className="text-xs">{language === 'en' ? 'AI answers are for educational purposes. Contact your election commission for official information.' : 'AI के उत्तर शैक्षणिक उद्देश्यों के लिए हैं। आधिकारिक जानकारी के लिए अपने चुनाव आयोग से परामर्श लें।'}</p>
          <p className="text-xs">Contact: <span className="text-saffron">election.eci.gov.in</span></p>
        </div>
      </footer>
    </>
  );
}
