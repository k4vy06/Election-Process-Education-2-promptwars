'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function Navigation() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  const isActive = (path) => pathname === path;

  const navLinks = [
    { path: '/', labelEn: '🏠 Home / घर', labelHi: '🏠 घर / Home' },
    { path: '/learn', labelEn: '📍 Learn / सीखें', labelHi: '📍 सीखें / Learn' },
    { path: '/chat', labelEn: '🤖 Ask AI / पूछें', labelHi: '🤖 पूछें / Ask AI' },
    { path: '/quiz', labelEn: '🧠 Quiz / क्विज़', labelHi: '🧠 क्विज़ / Quiz' },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary via-secondary to-primary border-b-4 border-saffron sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-saffron via-gray-100 to-bharat_green rounded-lg flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
              🇮🇳
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg leading-tight group-hover:text-saffron transition-colors">
                {language === 'en' ? 'भारत चुनाव' : 'भारत चुनाव'}
              </div>
              <div className="text-gray-400 text-xs">Election Guide</div>
            </div>
          </Link>

          {/* Nav links and Language Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 md:px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs md:text-sm whitespace-nowrap ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-saffron to-orange-500 text-black shadow-lg shadow-saffron/50 ring-2 ring-saffron'
                    : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-saffron/20 hover:to-bharat_green/20'
                }`}
              >
                {language === 'en' ? link.labelEn : link.labelHi}
              </Link>
            ))}

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="ml-2 px-3 md:px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs md:text-sm whitespace-nowrap bg-gradient-to-r from-bharat_blue to-blue-600 text-white shadow-lg hover:shadow-blue-500/50 ring-2 ring-bharat_blue"
              title="Toggle Language / भाषा बदलें"
            >
              {language === 'en' ? '🇬🇧 EN' : '🇮🇳 HI'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
