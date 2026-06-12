import { motion } from 'motion/react';
import Counter from './Counter';
import {
  Briefcase,
  CheckCircle,
  ArrowRight,
  Award,
  Lock,
  ShieldCheck,
  TrendingUp,
  Users,
  FileCheck2,
  LineChart,
  HardDriveDownload,
  Percent,
  Wallet,
  Globe
} from 'lucide-react';
import oneStopImg from '../assets/20604.webp';
import { Language, TabKey } from '../types';
import { DICTIONARY, SERVICES } from '../data';

interface HomeViewProps {
  language: Language;
  setCurrentTab: (tab: TabKey) => void;
  openServiceDetail: (serviceId: string) => void;
}

export default function HomeView({ language, setCurrentTab, openServiceDetail }: HomeViewProps) {
  const dict = DICTIONARY[language];

  const stats = [
    {
      value: 12,
      suffix: '+',
      label: language === 'en' ? 'Combined Exp. (Years)' : 'Anos de Experiência',
      color: 'text-secondary'
    },
    {
      value: 50,
      suffix: '+',
      label: language === 'en' ? 'Growing Startups Aided' : 'Empresas Apoiadas',
      color: 'text-secondary'
    },
    {
      value: 98,
      suffix: '%',
      label: language === 'en' ? 'Success Rate' : 'Nível de Rigor / Sucesso',
      color: 'text-secondary'
    },
    {
      value: 80,
      suffix: '+',
      label: language === 'en' ? 'Incorporations Guided' : 'Empresas Legalizadas',
      color: 'text-secondary'
    }
  ];

  const getServiceIcon = (id: string, className = "w-6 h-6") => {
    switch (id) {
      case 'legalisation':
        return <Briefcase className={className} />;
      case 'accounting_audit':
        return <FileCheck2 className={className} />;
      case 'taxation':
        return <Wallet className={className} />;
      case 'financial_management':
        return <LineChart className={className} />;
      case 'human_resources':
        return <Users className={className} />;
      case 'legal_consulting':
        return <ShieldCheck className={className} />;
      case 'environmental_consulting':
        return <Globe className={className} />;
      case 'forex_licensing':
        return <TrendingUp className={className} />;
      case 'import_export':
        return <HardDriveDownload className={className} />;
      default:
        return <Briefcase className={className} />;
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      {language === 'en' ? (
        /* Screenshot 1 Style: Expert Solutions */
        <section className="hero-pattern py-20 px-6 border-b border-outline-variant/10">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-secondary font-sans text-sm font-semibold tracking-widest uppercase block">
                {dict.expertSolutions}
              </span>
              <h1 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight tracking-tight">
                Precision-Driven <br />
                <span className="text-secondary">Financial Consultancy</span>
              </h1>
              <p className="font-sans text-base text-on-surface-variant max-w-lg leading-relaxed text-justify">
                {dict.heroPara}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => setCurrentTab('contact')}
                  className="bg-primary text-on-primary px-8 py-3 rounded-sm font-sans text-sm font-semibold hover:bg-primary-container transition-all cursor-pointer shadow-sm hover:shadow active:scale-95"
                  id="hero-contact-btn"
                >
                  {dict.contactExpert}
                </button>
                <button 
                  onClick={() => setCurrentTab('services')}
                  className="bg-secondary text-on-secondary px-8 py-3 rounded-sm font-sans text-sm font-semibold hover:opacity-90 transition-all cursor-pointer shadow-sm hover:shadow active:scale-95"
                  id="hero-portfolio-btn"
                >
                  {dict.viewPortfolio}
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[450px] rounded-sm overflow-hidden shadow-xl border border-outline-variant/25"
            >
              <img 
                alt="Accounting Professional Precision" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXM4iuRcAF2WNHXdPVY-cRBT0jm0uXRzYW0HO33OS6R3_4VOBB44e51mxQba01wduTlm4j7pYu4SEgeZgv3zjDKLnX-i4ZR_ObNg5aA8nW30U37RZbjP3jW9xPM6XrnANCpO_gPQQMaSdiz5NwhEW_FJ_ZrSBxbXH72m-1xsqIuN3vxoXQHrb8INxVXENMgwKAd1qXLKgadU9GSNPoWVIZtOrySEt77UlzL-K8fTll811YF4Zk1ItpXCNj9uk5MxeulaQVlMoHd1I"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </motion.div>

          </div>
        </section>
      ) : (
        /* Screenshot 2 Style: Grand Corporate Lobby Banner with Overlay */
        <section className="relative w-full overflow-hidden bg-primary min-h-[550px] flex items-center py-16 md:py-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/75 z-10" />
            <img 
              className="w-full h-full object-cover" 
              alt="Moz Consultores Lobby"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGWbRpxYMDwFxuyPoLvwakZYNmZ14eFLlpiEZp82tu5FMiitNgfjmZxmpRbc8o6Uas6fF52QtzJK21xV9o6rLxDMKEDDcuzf_qHdeKnoAMs8OxkTZKjE9wZ73MozSCMtMcSf_nboOs015DVPVutGo7DBHDvSr-J-RDxMuQ8qnzN4eBkv16BJIul5KLGTGELCmH0nwUh5QyDBszKT1PT9K5TCPGq7ZzBK1w0irtKYpsyMJogdAKgIP6o7udfnSKU4gKCGN6tccQBLc"
            />
          </div>
          <div className="relative z-20 max-w-[1250px] mx-auto px-6 w-full text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-on-primary space-y-6"
            >
              <span className="text-secondary-container bg-primary-container/40 dark:bg-primary-container/80 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-block">
                ★ {dict.expertSolutions}
              </span>
              <h1 className="font-headline text-4xl lg:text-5xl font-bold mb-md leading-tight text-white">
                {dict.tagline}
              </h1>
              <p className="font-sans text-base text-primary-fixed leading-relaxed opacity-95 text-justify">
                {dict.heroPara}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => setCurrentTab('schedule')}
                  className="bg-secondary text-on-secondary px-8 py-3.5 rounded-sm font-sans text-sm font-semibold shadow-md hover:translate-y-[-2px] transition-all cursor-pointer active:scale-95"
                  id="hero-pt-schedule-btn"
                >
                  {dict.scheduleBtn}
                </button>
                <button 
                  onClick={() => setCurrentTab('services')}
                  className="border border-on-primary text-on-primary px-8 py-3.5 rounded-sm font-sans text-sm font-semibold hover:bg-on-primary/10 transition-all cursor-pointer active:scale-95"
                  id="hero-pt-explore-btn"
                >
                  Ver Nossos Serviços
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 2. STATS BANNER */}
      <section className="bg-surface-container-low py-10 border-b border-outline-variant/10">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-4 rounded bg-surface border border-outline-variant/5 shadow-sm">
                <div className={`font-headline text-3xl lg:text-4xl font-extrabold ${stat.color} mb-1`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-sans text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE DISCIPLINES OR SPECIALIZED SERVICES */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-2xl lg:text-3.5xl font-bold text-primary mb-3">
              {dict.ourDisciplines}
            </h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                className={`border border-outline-variant/20 bg-surface p-7 rounded shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group ${
                  index % 3 === 1 ? 'border-t-4 border-t-secondary' : 'border-t border-t-outline-variant/20'
                }`}
              >
                <div>
                  <div className="w-12 h-12 bg-primary-container/10 text-primary rounded flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                    {getServiceIcon(service.id)}
                  </div>

                  <h3 className="font-headline text-lg font-bold text-primary mb-3">
                    {language === 'en' ? service.titleEn : service.titlePt}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant mb-6 leading-relaxed text-justify">
                    {language === 'en' ? service.descEn : service.descPt}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {(language === 'en' ? service.bulletsEn : service.bulletsPt).slice(0, 2).map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                        <span className="truncate">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => openServiceDetail(service.id)}
                  className="text-primary font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:text-secondary cursor-pointer border-t border-outline-variant/20 pt-4 w-full text-left"
                >
                  {dict.details} <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PROFESSIONAL CONTEXT / COMPROMETIMENTO COM O EGADO */}
      <section className="py-20 px-6 bg-surface-container overflow-hidden border-t border-b border-outline-variant/10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            {/* Background blur ornament */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl z-0" />
            
            <div className="relative z-10 rounded overflow-hidden shadow-2xl border border-outline-variant/30 aspect-[4/3] lg:aspect-square">
              <img
                className="w-full h-full object-cover"
                alt="Moz Consultores — Parceria Estratégica"
                src={oneStopImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 to-transparent pointer-events-none" />
            </div>

            {/* Excelência Reconhecida interactive badge matching Screenshot 2 */}
            <div className="absolute -bottom-6 -right-4 bg-primary text-on-primary p-6 rounded shadow-2xl z-20 border border-outline-variant/10 max-w-[280px]">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-secondary" />
                <p className="font-headline text-sm font-bold tracking-tight text-white">
                  {language === 'en' ? 'Recognized Excellence' : 'Excelência Reconhecida'}
                </p>
              </div>
              <p className="font-sans text-[11px] text-primary-fixed opacity-90 leading-relaxed font-medium">
                {language === 'en'
                  ? 'Reference consultancy for integrated strategic and business solutions in the region'
                  : 'Consultoria de referência em soluções estratégicas e empresariais integradas na região'}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-headline text-2xl lg:text-3xl font-extrabold text-primary leading-tight">
              {language === 'en' ? 'Your One-Stop-Shop for Business Consultancy' : 'A sua Solução One-Stop-Shop de Consultoria'}
            </h2>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed text-justify">
              {language === 'en'
                ? 'At Moz Consultores, our integrated approach allows you to centralize all your consultancy needs with a single trusted partner. From finance and taxation to legal, HR, foreign exchange, and environmental consulting — we cover the full spectrum of your business needs.'
                : 'Na Moz Consultores, a nossa abordagem integrada permite-lhe centralizar todas as suas necessidades de consultoria num único parceiro confiável. Desde as finanças e fiscalidade até à área jurídica, de RH, cambial e ambiental — cobrimos todo o espectro das necessidades do seu negócio.'
              }
            </p>
            <p className="font-sans text-sm text-on-surface-variant text-justify">
              {language === 'en'
                ? 'Each solution is tailored to the real needs of your business, backed by solid professional expertise applied to the local and international reality, ensuring full legal and operational security.'
                : 'Cada solução é desenhada à medida das necessidades reais do seu negócio, suportada por sólida bagagem profissional aplicada à realidade local e internacional, garantindo total segurança jurídica e operacional.'
              }
            </p>

            <div className="space-y-4 pt-4">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-primary uppercase tracking-wider">
                    {language === 'en' ? 'Personalized Approach' : 'Abordagem Personalizada'}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant mt-0.5">
                    {language === 'en'
                      ? 'Every solution is custom-designed for the real needs of your business, with no generic templates.'
                      : 'Cada solução é desenhada à medida das necessidades reais do seu negócio, sem modelos genéricos.'}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shadow-sm">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-primary uppercase tracking-wider">
                    {language === 'en' ? 'Technical Rigor & Professionalism' : 'Rigor Técnico e Profissionalismo'}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant mt-0.5">
                    {language === 'en'
                      ? 'Solid professional expertise applied to the local and international reality, ensuring total legal and operational security.'
                      : 'Sólida bagagem profissional aplicada à realidade local e internacional, garantindo total segurança jurídica e operacional.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. DYNAMIC CALL-TO-ACTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto bg-primary-container rounded-sm p-12 lg:p-16 relative overflow-hidden text-center text-on-primary shadow-xl">
          
          <div className="relative z-10 space-y-6">
            <h2 className="font-headline text-2xl lg:text-3.5xl font-bold tracking-tight text-white leading-tight">
              {dict.readySecure}
            </h2>
            <p className="font-sans text-sm text-on-primary-container max-w-xl mx-auto leading-relaxed opacity-95 text-justify">
              {dict.readySecureSub}
            </p>
            <div className="pt-2">
              <button 
                onClick={() => setCurrentTab('schedule')}
                className="bg-secondary text-on-secondary hover:brightness-110 px-8 py-4 rounded-sm font-sans text-xs font-bold uppercase tracking-widest hover:scale-[1.03] transition-all cursor-pointer shadow-lg inline-flex items-center gap-2"
                id="cta-schedule-btn"
              >
                <TrendingUp className="w-4 h-4" />
                {dict.scheduleBtn}
              </button>
            </div>
          </div>

          {/* Abstract backdrop ornaments */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary opacity-15 blur-3xl" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-primary opacity-30 blur-3xl" />
        </div>
      </section>
    </div>
  );
}
