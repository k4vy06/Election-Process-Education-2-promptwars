'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
  const { t, language } = useTranslation();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-primary">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">🇮🇳</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-saffron via-gray-100 to-bharat_green bg-clip-text text-transparent">
                {t('home.title')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('home.subtitle')}
            </p>
            <p className="text-sm text-gray-400 mb-12">
              {language === 'en' ? '✨ Simple • Non-Political • Interactive • Educational' : '✨ सरल • गैर-राजनीतिक • इंटरैक्टिव • शिक्षणीय'}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20">
            <Link href="/learn" className="btn text-center text-lg py-5 flex items-center justify-center gap-2 group hover:scale-110 transition-transform shadow-xl bg-gradient-to-r from-saffron to-orange-600 hover:from-saffron hover:to-orange-700 text-black font-bold">
              <span className="text-2xl group-hover:animate-bounce">📍</span> {t('home.cta1')}
            </Link>
            <Link href="/chat" className="btn-outline text-center text-lg py-5 flex items-center justify-center gap-2 group hover:scale-110 transition-transform border-saffron hover:border-orange-400">
              <span className="text-2xl group-hover:rotate-12">🤖</span> {t('home.cta2')}
            </Link>
            <Link href="/quiz" className="btn text-center text-lg py-5 flex items-center justify-center gap-2 group hover:scale-110 transition-transform shadow-xl bg-gradient-to-r from-bharat_green to-green-700 hover:from-bharat_green hover:to-green-800 text-white font-bold">
              <span className="text-2xl group-hover:animate-pulse">🧠</span> {t('home.cta3')}
            </Link>
            <a
              href="#features"
              className="btn-outline text-center text-lg py-5 flex items-center justify-center gap-2 group hover:scale-110 transition-transform border-bharat_blue hover:border-cyan-400"
            >
              <span className="text-2xl">ℹ️</span> {t('home.cta4')}
            </a>
          </div>

          {/* Features Section */}
          <section id="features" className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-saffron via-gray-100 to-bharat_green bg-clip-text text-transparent">✨ {t('home.features')}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div className="card group hover:scale-105 hover:ring-2 hover:ring-saffron">
                <div className="text-5xl mb-4 group-hover:animate-bounce transition-all">📍</div>
                <h3 className="font-bold text-lg mb-2 text-saffron group-hover:text-orange-400">{t('home.feature1')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('home.feature1Desc')}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="card group hover:scale-105 hover:ring-2 hover:ring-saffron">
                <div className="text-5xl mb-4 group-hover:animate-spin transition-all">🤖</div>
                <h3 className="font-bold text-lg mb-2 text-saffron group-hover:text-orange-400">{t('home.feature2')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('home.feature2Desc')}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="card group hover:scale-105 hover:ring-2 hover:ring-bharat_green">
                <div className="text-5xl mb-4 group-hover:pulse">🧠</div>
                <h3 className="font-bold text-lg mb-2 text-bharat_green group-hover:text-green-400">{t('home.feature3')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('home.feature3Desc')}
                </p>
              </div>

              {/* Feature 4 */}
              <div className="card group hover:scale-105 hover:ring-2 hover:ring-bharat_blue">
                <div className="text-5xl mb-4 group-hover:animate-pulse transition-all">🌐</div>
                <h3 className="font-bold text-lg mb-2 text-bharat_blue group-hover:text-blue-400">{t('home.feature4')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('home.feature4Desc')}
                </p>
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="bg-gradient-to-r from-saffron/10 via-primary to-bharat_green/10 rounded-2xl p-8 md:p-12 mb-20 border-2 border-saffron/30 hover:border-saffron/60 transition-all">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-saffron to-bharat_green bg-clip-text text-transparent">🎯 {t('home.why')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🗳️</div>
                <h3 className="text-saffron font-bold mb-2 group-hover:text-orange-400">{t('home.why1')}</h3>
                <p className="text-gray-400">
                  {t('home.why1Desc')}
                </p>
              </div>
              <div className="group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚖️</div>
                <h3 className="text-bharat_blue font-bold mb-2 group-hover:text-blue-400">{t('home.why2')}</h3>
                <p className="text-gray-400">
                  {t('home.why2Desc')}
                </p>
              </div>
              <div className="group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🛡️</div>
                <h3 className="text-bharat_green font-bold mb-2 group-hover:text-green-400">{t('home.why3')}</h3>
                <p className="text-gray-400">
                  {t('home.why3Desc')}
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Preview */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-saffron via-gray-100 to-bharat_green bg-clip-text text-transparent">❓ {t('home.faq')}</h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="card group hover:ring-2 hover:ring-saffron hover:scale-102">
                <div className="flex gap-3 items-start">
                  <span className="text-2xl group-hover:scale-125 transition-transform">👥</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-saffron mb-2 group-hover:text-orange-400">{t('home.faq1Q')}</h3>
                    <p className="text-gray-400 text-sm">
                      {t('home.faq1A')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card group hover:ring-2 hover:ring-saffron hover:scale-102">
                <div className="flex gap-3 items-start">
                  <span className="text-2xl group-hover:scale-125 transition-transform">🚫</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-saffron mb-2 group-hover:text-orange-400">{t('home.faq2Q')}</h3>
                    <p className="text-gray-400 text-sm">
                      {t('home.faq2A')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card group hover:ring-2 hover:ring-bharat_green hover:scale-102">
                <div className="flex gap-3 items-start">
                  <span className="text-2xl group-hover:scale-125 transition-transform">📋</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-bharat_green mb-2 group-hover:text-green-400">{t('home.faq3Q')}</h3>
                    <p className="text-gray-400 text-sm">
                      {t('home.faq3A')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card group hover:ring-2 hover:ring-bharat_blue hover:scale-102">
                <div className="flex gap-3 items-start">
                  <span className="text-2xl group-hover:scale-125 transition-transform">🔒</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-bharat_blue mb-2 group-hover:text-blue-400">{t('home.faq4Q')}</h3>
                    <p className="text-gray-400 text-sm">
                      {t('home.faq4A')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Bottom */}
          <div className="text-center mb-20">
            <p className="text-gray-300 mb-6 text-lg font-semibold">🚀 {t('home.ctaBottom')}</p>
            <Link href="/learn" className="btn inline-flex gap-2 text-lg px-8 py-4 shadow-xl hover:shadow-2xl bg-gradient-to-r from-saffron to-orange-600 hover:from-saffron hover:to-orange-700 text-black font-bold">
              {t('home.ctaButtonText')} ➡️
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-saffron/20 via-primary to-bharat_green/20 border-t-2 border-saffron/30 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
          <p className="text-gray-300 text-sm font-semibold">⚖️ 🇮🇳 {language === 'en' ? 'Election Guide India © 2024' : 'भारतीय चुनाव गाइड © 2024'}</p>
          <p className="text-gray-400 text-xs">{language === 'en' ? 'Educational Resource | Non-Political | Free' : 'शिक्षण संसाधन | गैर-राजनीतिक | मुफ़्त'}</p>
          <p className="text-gray-500 text-xs">{language === 'en' ? 'For official info: election.eci.gov.in' : 'आधिकारिक जानकारी के लिए: election.eci.gov.in'}</p>
        </div>
      </footer>
    </>
  );
}
