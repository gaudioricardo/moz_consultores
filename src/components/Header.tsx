import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Calendar, Compass } from 'lucide-react';
import { Language, TabKey } from '../types';
import { DICTIONARY } from '../data';
import logo from '../assets/MozConsultores Logo.png';

interface HeaderProps {
  currentTab: TabKey;
  setCurrentTab: (tab: TabKey) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ currentTab, setCurrentTab, language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dict = DICTIONARY[language];

  const navItems: { key: TabKey; label: string }[] = [
    { key: 'home', label: language === 'en' ? 'Home' : 'Início' },
    { key: 'services', label: dict.navServices },
    { key: 'about', label: dict.navAbout },
    { key: 'contact', label: dict.navContact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const handleNavClick = (tab: TabKey) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-surface border-b border-outline-variant/20 z-50 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo block */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer transition-transform active:scale-95 group font-headline"
          id="nav-logo"
        >
          {/* Brand logo SVG */}
          <div className="w-11 h-11 bg-white flex items-center justify-center rounded-full shadow-sm hover:scale-105 transition-transform duration-300 border border-outline-variant/15 p-0.5">
            <img src={logo} alt="Moz Consultores logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-bold text-xl tracking-tight text-primary">Moz Consultores</span>
            <span className="block text-[9px] font-mono tracking-widest text-[#ba8f44] uppercase -mt-1 font-semibold">
              {language === 'en' ? 'Strategy & Advisory' : 'Consultoria Estratégica'}
            </span>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className={`relative font-sans text-sm font-medium transition-all py-1 cursor-pointer hover:text-primary ${
                currentTab === item.key 
                  ? 'text-primary font-bold' 
                  : 'text-on-surface-variant'
              }`}
            >
              {item.label}
              {currentTab === item.key && (
                <motion.div 
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}

          {/* Language Toggle with custom indicators */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container hover:bg-outline-variant/20 transition-colors text-xs font-semibold text-primary cursor-pointer border border-outline-variant/10"
            title={language === 'en' ? 'Mudar para Português' : 'Switch to English'}
            id="lang-toggle"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className={language === 'en' ? 'font-bold' : 'opacity-60'}>EN</span>
            <span className="opacity-30">|</span>
            <span className={language === 'pt' ? 'font-bold' : 'opacity-60'}>PT</span>
          </button>

          {/* Consultation Button */}
          <button
            onClick={() => handleNavClick('schedule')}
            className={`flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-sm font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:brightness-110 active:scale-95 border-b border-primary/20 ${
              currentTab === 'schedule' ? 'bg-secondary text-white' : ''
            }`}
            id="header-booking-btn"
          >
            <Calendar className="w-4 h-4" />
            {dict.scheduleBtn}
          </button>
        </div>

        {/* Mobile top-bar control menu */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2 py-1.5 rounded bg-surface-container text-xs font-bold text-primary cursor-pointer border border-outline-variant/10"
            title={language === 'en' ? 'Mudar para Português' : 'Switch to English'}
            id="mobile-lang-toggle"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-sm bg-surface-container text-primary hover:bg-outline-variant/30 transition-colors cursor-pointer"
            id="mobile-menu-burger"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-surface border-b border-outline-variant/30 shadow-lg overflow-hidden z-40"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`w-full text-left py-2 px-3 rounded text-sm font-medium transition-colors ${
                    currentTab === item.key
                      ? 'bg-primary-container/10 text-primary font-bold'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick('schedule')}
                className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <Calendar className="w-4 h-4" />
                {dict.scheduleBtn}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
