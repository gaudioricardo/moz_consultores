import { motion } from 'motion/react';
import { 
  Award, 
  ShieldAlert, 
  Check, 
  Globe2, 
  BookOpen, 
  Sparkles, 
  HeartHandshake, 
  Calendar,
  Contact2
} from 'lucide-react';
import { Language, TabKey } from '../types';
import { CONSULTANTS, DICTIONARY } from '../data';

interface AboutViewProps {
  language: Language;
  setCurrentTab: (tab: TabKey) => void;
}

export default function AboutView({ language, setCurrentTab }: AboutViewProps) {
  const dict = DICTIONARY[language];

  // Core pillars of Moz Consultores values — from desc.md "Valores"
  const pillars = [
    {
      titleEn: 'Ethics & Transparency',
      titlePt: 'Ética e Transparência',
      descEn: 'We operate with absolute integrity in every mandate, ensuring transparent communication and honest advisory at every stage of our client engagements.',
      descPt: 'Atuamos com integridade absoluta em cada mandato, garantindo comunicação transparente e assessoria honesta em todas as fases do nosso relacionamento com os clientes.',
      icon: <Award className="w-6 h-6 text-secondary" />
    },
    {
      titleEn: 'Confidentiality & Trust',
      titlePt: 'Confidencialidade e Confiança',
      descEn: 'All client information and business data are handled with the strictest confidentiality protocols, safeguarding your industrial secrets and competitive intelligence.',
      descPt: 'Toda a informação dos clientes é tratada com os mais rigorosos protocolos de confidencialidade, salvaguardando os seus segredos industriais e dados estratégicos.',
      icon: <ShieldAlert className="w-6 h-6 text-secondary" />
    },
    {
      titleEn: 'Multidisciplinarity & Innovation',
      titlePt: 'Multidisciplinaridade e Inovação',
      descEn: 'Our integrated approach covers financial, legal, HR, fiscal, and environmental consulting — delivering innovative, cross-disciplinary solutions tailored to each client.',
      descPt: 'A nossa abordagem integrada cobre consultoria financeira, jurídica, de RH, fiscal e ambiental, entregando soluções inovadoras e multidisciplinares adaptadas a cada cliente.',
      icon: <Globe2 className="w-6 h-6 text-secondary" />
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      
      {/* Editorial Title */}
      <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
        <span className="text-secondary font-sans text-xs font-bold tracking-widest uppercase block">
          {language === 'en' ? 'Who We Are' : 'Sobre Nós'}
        </span>
        <h1 className="font-headline text-3xl lg:text-4.5xl font-extrabold text-primary">
          {language === 'en' ? 'Your Strategic Partner in Mozambique' : 'O seu Parceiro Estratégico em Moçambique'}
        </h1>
        <div className="h-[2px] w-20 bg-secondary mx-auto mt-2" />
        <p className="font-sans text-sm text-on-surface-variant max-w-lg mx-auto pt-2 text-justify">
          {language === 'en'
            ? 'An independent business consultancy firm headquartered in Inhambane, delivering integrated solutions across finance, law, HR, taxation, and environmental advisory.'
            : 'Uma firma de consultoria empresarial independente, sediada em Inhambane, que oferece soluções integradas nas áreas financeira, jurídica, fiscal, de RH e ambiental.'
          }
        </p>
      </div>

      {/* Main Philosophy Frame / Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        
        <div className="space-y-6">
          <h2 className="font-headline text-2xl font-bold text-primary leading-tight">
            {language === 'en' ? 'Headquartered in Inhambane, Committed to Your Growth' : 'Sediados em Inhambane, Comprometidos com o seu Crescimento'}
          </h2>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed text-justify">
            {language === 'en'
              ? 'Moz Consultores is an independent business consultancy firm headquartered in Inhambane, committed to transforming operational, legal, and financial challenges into sustainable growth opportunities. Combining technical rigor, multidisciplinary vision, and deep knowledge of the Mozambican regulatory landscape, we act as the ideal strategic partner for entrepreneurs and organizations seeking excellence and full compliance.'
              : 'A Moz Consultores é uma firma de consultoria empresarial independente, sediada em Inhambane, comprometida em transformar desafios operacionais, legais e financeiros em oportunidades de crescimento sustentável. Aliando rigor técnico, visão multidisciplinar e profundo conhecimento do cenário fiscal, legal e regulatório moçambicano, atuamos como o parceiro estratégico ideal para o empreendedor e para organizações que buscam excelência e conformidade total.'
            }
          </p>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed text-justify">
            {language === 'en'
              ? 'Our mission is to provide integrated financial, management, legal, and regulatory consultancy solutions, ensuring legal compliance and driving the efficiency and growth of our clients — both locally and internationally.'
              : 'A nossa missão é providenciar soluções integradas de consultoria financeira, de gestão, jurídica e regulatória, garantindo conformidade legal e impulsionando a eficiência e o crescimento dos nossos clientes no mercado nacional e internacional.'
            }
          </p>

          <div className="pt-4 flex gap-4">
            <button
              onClick={() => setCurrentTab('schedule')}
              className="bg-primary text-on-primary font-sans text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-sm hover:bg-primary-container cursor-pointer transition-colors shadow-sm"
            >
              {language === 'en' ? 'Schedule a Consultation' : 'Agendar Consulta'}
            </button>
            <button
              onClick={() => setCurrentTab('contact')}
              className="border border-outline font-sans text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-sm hover:bg-surface-container-low cursor-pointer transition-colors"
            >
              {language === 'en' ? 'Contact Us' : 'Falar Connosco'}
            </button>
          </div>
        </div>

        {/* Dynamic Image Cards Collage */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/15 to-primary/5 rounded blur-2xl z-0" />
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded overflow-hidden shadow-lg border border-outline-variant/20 aspect-[3/4]">
                <img 
                  className="w-full h-full object-cover grayscale contrast-125" 
                  alt="Corporate Lobby" 
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300"
                />
              </div>
              <div className="bg-secondary text-white p-6 rounded shadow border border-outline-variant/10 text-center">
                <span className="block text-3xl font-headline font-bold">100%</span>
                <span className="block text-[10px] font-mono tracking-widest uppercase mt-1">
                  {language === 'en' ? 'Client Commitment' : 'Compromisso com o Cliente'}
                </span>
              </div>
            </div>
            
            <div className="space-y-4 pt-8">
              <div className="bg-primary text-white p-6 rounded shadow border border-outline-variant/10 text-center">
                <span className="block text-3xl font-headline font-bold">One-Stop</span>
                <span className="block text-[10px] font-mono tracking-widest uppercase mt-1">
                  {language === 'en' ? 'Integrated Solutions' : 'Soluções Integradas'}
                </span>
              </div>
              <div className="rounded overflow-hidden shadow-lg border border-outline-variant/20 aspect-[3/4]">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Accounting Calculator Team" 
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Corporate Value Pillars */}
      <div className="bg-surface-container p-10 rounded border border-outline-variant/20 mb-20">
        <div className="text-center mb-10">
          <h3 className="font-headline text-lg font-bold text-primary">
            {language === 'en' ? 'Our Values' : 'Os Nossos Valores'}
          </h3>
          <p className="font-sans text-xs text-on-surface-variant max-w-md mx-auto mt-1 text-justify">
            {language === 'en' ? 'The principles that guide every engagement and decision we make.' : 'Os princípios que orientam cada intervenção e decisão que tomamos.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white p-6 rounded border border-outline-variant/15 shadow-sm space-y-4">
              <div className="p-3 bg-secondary-container/10 rounded-sm w-fit">
                {pillar.icon}
              </div>
              <h4 className="font-headline text-sm font-bold text-primary">
                {language === 'en' ? pillar.titleEn : pillar.titlePt}
              </h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed text-justify">
                {language === 'en' ? pillar.descEn : pillar.descPt}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Partners / Consultant Team Grid */}
      <div className="mb-20">
        <div className="mb-10 text-center">
          <span className="text-secondary font-sans text-xs font-bold tracking-widest uppercase block">
            {language === 'en' ? 'Our Team' : 'A Nossa Equipa'}
          </span>
          <h3 className="font-headline text-2xl font-bold text-primary mt-1">
            {language === 'en' ? 'Meet Our Team' : 'Conheça a Nossa Equipa'}
          </h3>
          <p className="font-sans text-xs text-on-surface-variant mt-1 max-w-md mx-auto text-justify">
            {language === 'en'
              ? 'Our professionals bring solid technical expertise applied to the local and international reality, ensuring full legal and operational security.'
              : 'Os nossos profissionais trazem sólida bagagem técnica aplicada à realidade local e internacional, garantindo total segurança jurídica e operacional.'}
          </p>
        </div>

        <div className={`grid ${CONSULTANTS.length === 1 ? 'grid-cols-1 max-w-xs mx-auto' : 'grid-cols-1 md:grid-cols-3'} gap-8`}>
          {CONSULTANTS.map((c) => (
            <div key={c.id} className="bg-surface rounded overflow-hidden shadow-sm border border-outline-variant/20 hover:shadow-md transition-all">
              <div className="aspect-square w-full overflow-hidden bg-surface-container relative">
                <img 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                  alt={c.name} 
                  referrerPolicy="no-referrer"
                  src={c.image}
                />
                <div className="absolute bottom-3 left-3 bg-primary text-white text-[9px] font-mono px-2 py-1 rounded">
                  {language === 'en' ? `${c.experience} Years Exp` : `${c.experience} Anos Exp`}
                </div>
              </div>
              <div className="p-5 text-center space-y-2">
                <h4 className="font-headline text-sm font-bold text-primary">{c.name}</h4>
                <p className="font-sans text-xs font-semibold text-secondary">{language === 'en' ? c.roleEn : c.rolePt}</p>
                
                <div className="flex gap-1 justify-center text-yellow-500 text-xs">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  <span className="text-on-surface-variant block text-[10px] font-bold ml-1 text-primary">({c.rating.toFixed(1)})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



    </div>
  );
}
