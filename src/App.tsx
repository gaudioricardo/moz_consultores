import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

import Header from './components/Header';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import ScheduleView from './components/ScheduleView';
import { Language, TabKey } from './types';
import { DICTIONARY } from './data';
import logo from './assets/logo.webp';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabKey>('home');
  const [language, setLanguage] = useState<Language>('pt'); // Default to PT to match premium Portuguese screenshots first, or toggle naturally!
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>('legalisation');
  const [loading, setLoading] = useState(true);

  // Multi-step route transition layout variables
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.25, ease: 'easeIn' } }
  };

  // Preloader timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const openServiceDetail = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentTab('services');
  };

  const dict = DICTIONARY[language];

  return (
    <div className="min-h-screen bg-background text-on-background font-sans flex flex-col justify-between pt-20 overflow-x-hidden">

      {/* Preloader overlay — sits above the real content with backdrop-blur */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden backdrop-blur-md bg-[#133854]/80 text-white"
          >
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white blur-3xl animate-pulse" />
              <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#ba8f44] blur-3xl" style={{ animationDelay: '1s' }} />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center gap-7 text-center px-6 relative z-10"
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
                    '0 25px 30px -5px rgb(0 0 0 / 0.45), 0 12px 14px -6px rgb(0 0 0 / 0.45)',
                    '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)'
                  ]
                }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="w-48 h-48 md:w-56 md:h-56 bg-white p-4 rounded-full flex items-center justify-center"
              >
                <img src={logo} alt="Moz Consultores logo" className="w-full h-full object-contain" />
              </motion.div>

              <div className="space-y-3">
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="font-headline text-2xl md:text-3.5xl font-extrabold tracking-wide text-white drop-shadow-md"
                >
                  Bem Vindo a MozConsultores
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="text-[11px] md:text-xs font-mono tracking-[0.25em] text-[#cbd5e1] uppercase font-semibold"
                >
                  Parceria Estratégica para o seu Crescimento
                </motion.p>
              </div>

              <div className="w-40 h-1 bg-white/10 rounded-full overflow-hidden mt-3 relative">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-1/2 bg-[#ba8f44] rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Header Navigation System */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        language={language} 
        setLanguage={setLanguage} 
      />

      {/* 2. Main Tab router panel */}
      <main className="flex-grow w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            {currentTab === 'home' && (
              <HomeView 
                language={language} 
                setCurrentTab={setCurrentTab} 
                openServiceDetail={openServiceDetail} 
              />
            )}

            {currentTab === 'services' && (
              <ServicesView 
                language={language} 
                selectedServiceId={selectedServiceId} 
                setSelectedServiceId={setSelectedServiceId} 
                setCurrentTab={setCurrentTab}
              />
            )}

            {currentTab === 'about' && (
              <AboutView 
                language={language} 
                setCurrentTab={setCurrentTab} 
              />
            )}

            {currentTab === 'contact' && (
              <ContactView 
                language={language} 
              />
            )}

            {currentTab === 'schedule' && (
              <ScheduleView 
                language={language} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Institutional Corporate Footer block */}
      <footer className="bg-primary text-on-primary border-t border-primary-container-low/20">
        <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo brand pillar block */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                <img src={logo} alt="Moz Consultores logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="font-headline font-bold text-lg text-white">Moz Consultores</span>
            </div>
            <p className="font-sans text-xs text-primary-fixed/80 leading-relaxed max-w-sm">
              {dict.heroPara}
            </p>
            <div className="space-y-1.5 pt-2">
              <div className="flex items-center gap-2 text-xs text-primary-fixed">
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>+258 84 624 9497</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-primary-fixed">
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <span>clarawanela@mozconsultores.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-primary-fixed">
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                <span>Inhambane, Moçambique</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-4 pt-1">
            <h4 className="font-headline text-xs font-bold text-secondary uppercase tracking-widest">
              {dict.footerServices}
            </h4>
            <ul className="space-y-2 text-xs text-primary-fixed opacity-90">
              <li>
                <button onClick={() => openServiceDetail('legalisation')} className="hover:text-white cursor-pointer transition-colors text-left">
                  {language === 'en' ? 'Company Legalization' : 'Legalização de Empresas'}
                </button>
              </li>
              <li>
                <button onClick={() => openServiceDetail('accounting_audit')} className="hover:text-white cursor-pointer transition-colors text-left">
                  {language === 'en' ? 'Accounting & Audit' : 'Contabilidade e Auditoria'}
                </button>
              </li>
              <li>
                <button onClick={() => openServiceDetail('taxation')} className="hover:text-white cursor-pointer transition-colors text-left">
                  {language === 'en' ? 'Taxation & Fiscal' : 'Fiscalidade'}
                </button>
              </li>
              <li>
                <button onClick={() => openServiceDetail('financial_management')} className="hover:text-white cursor-pointer transition-colors text-left">
                  {language === 'en' ? 'Financial Management' : 'Gestão Financeira'}
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate info links */}
          <div className="md:col-span-2 space-y-4 pt-1">
            <h4 className="font-headline text-xs font-bold text-secondary uppercase tracking-widest">
              {dict.footerCompany}
            </h4>
            <ul className="space-y-2 text-xs text-primary-fixed opacity-90">
              <li><button onClick={() => setCurrentTab('about')} className="hover:text-white cursor-pointer transition-colors">{language === 'en' ? 'About Our Practice' : 'A Nossa Prática'}</button></li>
              <li><button onClick={() => setCurrentTab('contact')} className="hover:text-white cursor-pointer transition-colors">{language === 'en' ? 'Contact Partner Office' : 'Contactar Escritório'}</button></li>
              <li><button onClick={() => setCurrentTab('schedule')} className="hover:text-white cursor-pointer transition-colors">{language === 'en' ? 'Direct Booking' : 'Marcar Agendamento'}</button></li>
            </ul>
          </div>

          {/* Legal / Compliance links */}
          <div className="md:col-span-3 space-y-4 pt-1">
            <h4 className="font-headline text-xs font-bold text-secondary uppercase tracking-widest">
              {dict.footerLegal}
            </h4>
            <ul className="space-y-2 text-xs text-primary-fixed opacity-80">
              <li>{language === 'en' ? 'Tax Disclosure Guidelines' : 'Directrizes do Organismo de Supervisão'}</li>
              <li>{language === 'en' ? 'Privacy & Active NDA Safeguards' : 'Acordo de Confidencialidade (NDA)'}</li>
              <li>{language === 'en' ? 'Statutory General Licensing' : 'Portaria Reguladora e Licenciamento'}</li>
            </ul>
          </div>

        </div>

        {/* Legal copyright stripe */}
        <div className="border-t border-primary-container/20 py-6 text-center text-primary-fixed opacity-60 text-[10px] font-mono tracking-wide space-y-1">
          <div>&copy; {new Date().getFullYear()} {dict.brand}. {dict.allRights}</div>
          <div className="opacity-50">Powered By: Gáudio Ricardo | Software Architect</div>
        </div>
      </footer>

    </div>
  );
}
