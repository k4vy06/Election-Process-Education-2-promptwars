'use client';

import Navigation from '@/components/Navigation';
import Quiz from '@/components/Quiz';
import { useTranslation } from '@/hooks/useTranslation';

export default function QuizPage() {
  const { t, language } = useTranslation();
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-primary">
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8 text-center">
            <div className="text-5xl mb-4">🧠</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-saffron via-gray-100 to-bharat_green bg-clip-text text-transparent">{t('quiz.title')}</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t('quiz.description')}
            </p>
          </div>

          <Quiz />

          {/* Quiz Info */}
          <section className="mt-12 bg-gradient-to-r from-saffron/10 via-secondary to-bharat_green/10 rounded-xl p-8 border border-saffron/30">
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-saffron to-bharat_green bg-clip-text text-transparent">{t('quiz.aboutTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-400">
              <div className="card bg-secondary/80">
                <h3 className="text-saffron font-bold mb-2">📚 {t('quiz.whatYouLearn')}</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ {t('quiz.learn1')}</li>
                  <li>✓ {t('quiz.learn2')}</li>
                  <li>✓ {t('quiz.learn3')}</li>
                  <li>✓ {t('quiz.learn4')}</li>
                </ul>
              </div>
              <div className="card bg-secondary/80">
                <h3 className="text-bharat_green font-bold mb-2">⚙️ {t('quiz.howItWorks')}</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ {t('quiz.work1')}</li>
                  <li>✓ {t('quiz.work2')}</li>
                  <li>✓ {t('quiz.work3')}</li>
                  <li>✓ {t('quiz.work4')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-saffron to-bharat_green bg-clip-text text-transparent">💡 {t('quiz.tips')}}</h2>
            <div className="card bg-gradient-to-r from-bharat_blue/10 to-secondary border border-bharat_blue/30">
              <ul className="text-gray-400 space-y-3">
                <li>
                  <span className="text-bharat_blue font-bold">{t('quiz.tip1')}:</span> {t('quiz.tip1Desc')}
                </li>
                <li>
                  <span className="text-bharat_blue font-bold">{t('quiz.tip2')}:</span> {t('quiz.tip2Desc')}
                </li>
                <li>
                  <span className="text-bharat_blue font-bold">{t('quiz.tip3')}:</span> {t('quiz.tip3Desc')}
                </li>
                <li>
                  <span className="text-bharat_blue font-bold">{t('quiz.tip4')}:</span> {t('quiz.tip4Desc')}
                </li>
              </ul>
            </div>
          </section>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-saffron/20 via-primary to-bharat_green/20 border-t border-saffron/30 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2 text-gray-400 text-sm">
          <p className="font-semibold">⚖️ 🇮🇳 {language === 'en' ? 'Election Guide Quiz © 2024' : 'भारतीय चुनाव क्विज़ © 2024'}</p>
          <p className="text-xs">{language === 'en' ? 'Educational Resource | Non-Political | Free' : 'शिक्षा संसाधन | गैर-राजनीतिक | मुफ़्त'}</p>
        </div>
      </footer>
    </>
  );
}
