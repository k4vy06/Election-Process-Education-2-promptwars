'use client';

import Navigation from '@/components/Navigation';
import Timeline from '@/components/Timeline';
import { useTranslation } from '@/hooks/useTranslation';

export default function LearnPage() {
  const { t, language } = useTranslation();
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-primary">
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <div className="text-5xl mb-4">🇮🇳</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-saffron via-gray-100 to-bharat_green bg-clip-text text-transparent">{t('learn.title')}</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('learn.description')}
            </p>
          </div>

          <Timeline />

          {/* Additional Info */}
          <section className="mt-20 bg-gradient-to-r from-saffron/10 via-secondary to-bharat_green/10 rounded-xl p-8 md:p-12 border border-saffron/30">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-saffron to-bharat_green bg-clip-text text-transparent">📚 {t('learn.keyTerms')}</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card hover:ring-2 hover:ring-saffron">
                <h3 className="text-saffron font-bold mb-2">📋 {t('learn.voterId')}</h3>
                <p className="text-gray-400">
                  {t('learn.voterIdDesc')}
                </p>
              </div>

              <div className="card hover:ring-2 hover:ring-saffron">
                <h3 className="text-saffron font-bold mb-2">⚙️ {t('learn.evm')}</h3>
                <p className="text-gray-400">
                  {t('learn.evmDesc')}
                </p>
              </div>

              <div className="card hover:ring-2 hover:ring-bharat_blue">
                <h3 className="text-bharat_blue font-bold mb-2">🚫 {t('learn.nota')}</h3>
                <p className="text-gray-400">
                  {t('learn.notaDesc')}
                </p>
              </div>

              <div className="card hover:ring-2 hover:ring-bharat_blue">
                <h3 className="text-bharat_blue font-bold mb-2">🗺️ {t('learn.constituency')}</h3>
                <p className="text-gray-400">
                  {t('learn.constituencyDesc')}
                </p>
              </div>

              <div className="card hover:ring-2 hover:ring-bharat_green">
                <h3 className="text-bharat_green font-bold mb-2">🏛️ {t('learn.pollingStation')}</h3>
                <p className="text-gray-400">
                  {t('learn.pollingStationDesc')}
                </p>
              </div>

              <div className="card hover:ring-2 hover:ring-bharat_green">
                <h3 className="text-bharat_green font-bold mb-2">🎫 {t('learn.vvpatSlip')}</h3>
                <p className="text-gray-400">
                  {t('learn.vvpatSlipDesc')}
                </p>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-saffron to-bharat_green bg-clip-text text-transparent">💡 {t('learn.votingTips')}</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-gradient-to-br from-bharat_green/20 to-secondary border border-bharat_green/50">
                <h3 className="font-bold text-bharat_green mb-3 text-lg">✓ {t('learn.votingDos')}</h3>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• {t('learn.tip1')}</li>
                  <li>• {t('learn.tip2')}</li>
                  <li>• {t('learn.tip3')}</li>
                  <li>• {t('learn.tip4')}</li>
                  <li>• {t('learn.tip5')}</li>
                </ul>
              </div>

              <div className="card bg-gradient-to-br from-saffron/20 to-secondary border border-saffron/50">
                <h3 className="font-bold text-saffron mb-3 text-lg">✗ {t('learn.votingDonts')}</h3>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• {t('learn.tip6')}</li>
                  <li>• {t('learn.tip7')}</li>
                  <li>• {t('learn.tip8')}</li>
                  <li>• {t('learn.tip9')}</li>
                  <li>• {t('learn.tip10')}</li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-saffron/20 via-primary to-bharat_green/20 border-t border-saffron/30 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2 text-gray-400 text-sm">
          <p className="font-semibold">⚖️ 🇮🇳 {language === 'en' ? 'Election Guide India © 2024' : 'भारतीय चुनाव गाइड © 2024'}</p>
          <p className="text-xs">{language === 'en' ? 'Educational Resource | Non-Political | Free' : 'शिक्षण संसाधन | गैर-राजनीतिक | मुफ़्त'}</p>
          <p className="text-xs">{language === 'en' ? 'For official info: election.eci.gov.in' : 'आधिकारिक जानकारी: election.eci.gov.in'}</p>
        </div>
      </footer>
    </>
  );
}
