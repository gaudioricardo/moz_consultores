import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as ReTooltip, 
  Legend, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import {
  Briefcase,
  Check,
  ArrowRight,
  HelpCircle,
  ChevronRight,
  LineChart,
  DollarSign,
  TrendingUp,
  Layers,
  Calculator,
  Percent,
  Cpu,
  FileCheck2,
  Wallet,
  Users,
  ShieldCheck,
  Globe,
  HardDriveDownload,
  Calendar
} from 'lucide-react';
import { Language, TabKey, ServiceDetail } from '../types';
import { SERVICES } from '../data';

interface ServicesViewProps {
  language: Language;
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
  setCurrentTab: (tab: TabKey) => void;
}

export default function ServicesView({ language, selectedServiceId, setSelectedServiceId, setCurrentTab }: ServicesViewProps) {
  // Calculator States
  const [revenue, setRevenue] = useState<number>(5000000);
  const [expenses, setExpenses] = useState<number>(2800000);
  const [taxBracket, setTaxBracket] = useState<number>(32); // 32% default IRPC in Mozambique

  const getServiceIcon = (id: string, className = "w-5 h-5") => {
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

  // Math calculations for simulator
  const taxableProfit = Math.max(0, revenue - expenses);
  const currentTaxLiability = taxableProfit * (taxBracket / 100);
  // Optimization simulation: 15% optimized tax bracket reduction, or 25% deductibles optimization
  const optimizedTaxLiability = currentTaxLiability * 0.72; // Avg 28% optimization savings
  const estimatedSavings = currentTaxLiability - optimizedTaxLiability;

  // Simulator charts data
  const simulatorChartData = [
    { name: 'Taxable Profit (EBIT)', Current: taxableProfit, Optimized: taxableProfit },
    { name: 'Tax Expenses', Current: Math.round(currentTaxLiability), Optimized: Math.round(optimizedTaxLiability) },
    { name: 'Retained Cash', Current: Math.round(taxableProfit - currentTaxLiability), Optimized: Math.round(taxableProfit - optimizedTaxLiability) }
  ];

  const renderDetail = (s: ServiceDetail) => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface p-6 sm:p-8 rounded border border-primary/20 shadow-md space-y-5"
    >
      <div className="flex justify-between items-start border-b border-outline-variant/30 pb-4">
        <div>
          <h2 className="font-headline text-xl sm:text-2xl font-extrabold text-primary">
            {language === 'en' ? s.titleEn : s.titlePt}
          </h2>
          <span className="font-mono text-[10px] tracking-widest text-secondary font-bold uppercase block mt-1">
            {language === 'en' ? 'ADVISORY COMPLIANCE METRICS' : 'MÉTRICAS DE COMPLIANCE ADVISORY'}
          </span>
        </div>
        <span className="text-secondary bg-secondary-container/15 px-3 py-1 rounded text-xs font-semibold uppercase font-sans shrink-0 ml-2">
          {language === 'en' ? 'Verified' : 'Verificado'}
        </span>
      </div>

      <p className="font-sans text-sm text-on-surface-variant leading-relaxed text-justify">
        {language === 'en' ? s.descEn : s.descPt}
      </p>

      <div>
        <h4 className="font-sans text-xs font-extrabold text-primary uppercase tracking-wider mb-3">
          {language === 'en' ? 'Core Sub-Specialties' : 'Sub-Especialidades Integradas'}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(language === 'en' ? s.bulletsEn : s.bulletsPt).map((bullet, idx) => (
            <div key={idx} className="flex gap-2 items-center bg-surface-container-low px-3 py-2.5 rounded border border-outline-variant/15 text-xs font-medium text-primary">
              <Check className="w-4 h-4 text-secondary shrink-0" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setCurrentTab('schedule')}
        className="w-full flex items-center justify-center gap-2 bg-secondary text-white text-sm font-semibold px-4 py-3 rounded-sm hover:opacity-90 transition-all cursor-pointer active:scale-95"
      >
        <Calendar className="w-4 h-4" />
        {language === 'en' ? 'Schedule a Call' : 'Agendar Chamada'}
      </button>
    </motion.div>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      {/* Title block */}
      <div className="mb-12">
        <span className="text-secondary font-sans text-xs font-bold tracking-widest uppercase block mb-2">
          {language === 'en' ? 'Our Advisory Focus' : 'Nosso Foco Consultivo'}
        </span>
        <h1 className="font-headline text-3xl lg:text-4xl font-extrabold text-primary">
          {language === 'en' ? 'Institutional Grade Solutions' : 'Soluções Contábeis & Fiscais Avançadas'}
        </h1>
        <p className="font-sans text-sm text-on-surface-variant max-w-2xl mt-3 text-justify">
          {language === 'en' 
            ? 'Navigate multi-jurisdictional compliance, VAT refunds, and statutory audits with senior partners directing your account.'
            : 'Navegue pelas complexidades legais, auditoria e recuperação de tributos com consultores seniores líderes de mercado.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Service list selector */}
        <div className="lg:col-span-5 space-y-4">
          <div className="font-headline text-lg font-bold text-primary mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-secondary" />
            <span>{language === 'en' ? 'Explore Disciplines' : 'Serviços Especializados'}</span>
          </div>
          
          {SERVICES.map((s) => {
            const isSelected = selectedServiceId === s.id;
            return (
              <div key={s.id}>
                <button
                  onClick={() => setSelectedServiceId(s.id)}
                  className={`w-full text-left p-5 rounded border transition-all flex items-start gap-4 cursor-pointer hover:shadow-md ${
                    isSelected
                      ? 'border-primary bg-primary-container/5 shadow-sm'
                      : 'border-outline-variant/30 bg-surface'
                  }`}
                >
                  <div className={`p-2.5 rounded shrink-0 ${
                    isSelected ? 'bg-primary text-white' : 'bg-surface-container text-primary-container'
                  }`}>
                    {getServiceIcon(s.id, "w-5 h-5")}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className={`font-headline text-sm font-bold ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
                        {language === 'en' ? s.titleEn : s.titlePt}
                      </h3>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-primary' : 'text-outline'}`} />
                    </div>
                    <p className="font-sans text-xs text-on-surface-variant mt-1.5 line-clamp-2 leading-relaxed text-justify">
                      {language === 'en' ? s.descEn : s.descPt}
                    </p>
                  </div>
                </button>

                {/* Card de detalhe inline — visível apenas em mobile */}
                {isSelected && (
                  <div className="lg:hidden mt-3">
                    {renderDetail(s)}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-6 p-6 rounded bg-surface border border-outline-variant/20 shadow-inner">
            <div className="text-center space-y-2">
              <h4 className="font-headline text-xs font-bold text-primary uppercase tracking-wider">
                {language === 'en' ? 'Need Bespoke Pricing?' : 'Precisa de Orçamento Sob Medida?'}
              </h4>
              <p className="font-sans text-[11px] text-on-surface-variant leading-relaxed text-justify">
                {language === 'en' 
                  ? 'Request an initial assessment of ledger transactions with an institutional auditor.'
                  : 'Solicite uma avaliação preventiva inicial dos seus livros contabilísticos com os nossos auditores seniores.'}
              </p>
              <button 
                onClick={() => setCurrentTab('schedule')}
                className="inline-flex items-center gap-1.5 bg-secondary text-white text-xs font-semibold px-4 py-2.5 rounded-sm hover:opacity-90 transition-all cursor-pointer mt-2"
              >
                {language === 'en' ? 'Book Direct Call' : 'Agendar Chamada'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Service View and Calculator dashboard */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Active Service Detailed View Panel — visível apenas em desktop */}
          {selectedServiceId && (
            <div className="hidden lg:block" key={selectedServiceId}>
              {renderDetail(SERVICES.find((s) => s.id === selectedServiceId)!)}
            </div>
          )}

          {/* Real-time Tax Savings Calculator Simulator */}
          <div className="bg-primary p-6 rounded-sm text-on-primary shadow-xl border border-primary-container relative">
            
            <div className="border-b border-on-primary/10 pb-4 mb-6">
              <h3 className="font-headline text-lg font-bold text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-secondary-container" />
                <span>
                  {language === 'en' ? 'Interactive Fiscal optimization tool' : 'Simulador de Otimização Fiscal'}
                </span>
              </h3>
              <p className="font-sans text-xs text-primary-fixed/80 mt-1 text-justify">
                {language === 'en' 
                  ? 'Project retained cash outcomes using our proprietary model.'
                  : 'Projete o fluxo de caixa retido após optimização fiscal legal.'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              
              {/* Revenue Slider */}
              <div className="space-y-1">
                <label className="block text-[10px] tracking-wider text-primary-fixed font-bold uppercase">
                  {language === 'en' ? 'Annual Corporate Revenue' : 'Faturação Anual'}
                </label>
                <div className="font-mono text-sm font-semibold text-white">
                  {revenue.toLocaleString()} MT
                </div>
                <input 
                  type="range" 
                  min={100000} 
                  max={20000000} 
                  step={100000}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full accent-secondary"
                />
              </div>

              {/* Expense Slider */}
              <div className="space-y-1">
                <label className="block text-[10px] tracking-wider text-primary-fixed font-bold uppercase">
                  {language === 'en' ? 'Deductible Expenses' : 'Despesas Dedutíveis'}
                </label>
                <div className="font-mono text-sm font-semibold text-white">
                  {expenses.toLocaleString()} MT
                </div>
                <input 
                  type="range" 
                  min={50000} 
                  max={(revenue - 50000) > 50000 ? revenue - 50000 : 50000} 
                  step={50000}
                  value={expenses}
                  onChange={(e) => setExpenses(Number(e.target.value))}
                  className="w-full accent-secondary"
                />
              </div>

              {/* Bracket choice */}
              <div className="space-y-1">
                <label className="block text-[10px] tracking-wider text-primary-fixed font-bold uppercase">
                  {language === 'en' ? 'Est. Tax Framework Ratio' : 'Taxa de IRC/Imposto Estimada'}
                </label>
                <div className="font-mono text-sm font-semibold text-white">
                  {taxBracket}%
                </div>
                <select 
                  value={taxBracket} 
                  onChange={(e) => setTaxBracket(Number(e.target.value))}
                  className="w-full bg-primary-container border border-on-primary/10 rounded-sm p-1.5 text-xs font-sans font-semibold text-white"
                >
                  <option value={32}>32% (IRPC - Regime Geral de Moçambique)</option>
                  <option value={3}>3% (ISPC - Imposto Simplificado de Pequenos Contribuintes)</option>
                  <option value={16}>16% (Taxa Geral do IVA Moçambique)</option>
                  <option value={20}>20% (Retenção na Fonte de Residentes)</option>
                </select>
              </div>

            </div>

            {/* Results output block */}
            <div className="bg-primary-container p-5 rounded-sm border border-on-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <div className="text-center md:text-left">
                <span className="block text-[10px] font-bold text-on-primary-container tracking-wider uppercase">
                  {language === 'en' ? 'Estimated Annual Tax Savings' : 'Poupança Anual Estimada'}
                </span>
                <span className="font-headline text-3xl font-extrabold text-secondary-container">
                  {Math.round(estimatedSavings).toLocaleString()} MT
                </span>
              </div>
              <div className="text-center md:text-right bg-primary/40 px-4 py-2 rounded border border-on-primary/10">
                <span className="block text-[9px] font-mono text-primary-fixed tracking-widest uppercase">
                  {language === 'en' ? 'PROJECTED ROI' : 'TAX ROI ESTIMADO'}
                </span>
                <span className="font-sans text-sm font-bold text-white">
                  ~ 324% (Stewardship Ratio)
                </span>
              </div>
            </div>

            {/* Chart Container displaying optimal cash trajectory */}
            <div className="w-full h-44 bg-primary/20 p-2 rounded">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={simulatorChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#24325e" />
                  <XAxis dataKey="name" stroke="#8d9bce" fontSize={9} />
                  <YAxis stroke="#8d9bce" fontSize={9} />
                  <ReTooltip 
                    contentStyle={{ backgroundColor: '#24325e', borderColor: '#ffdcbc' }}
                    labelStyle={{ color: '#ffffff', fontSize: '10px', fontFamily: 'Montserrat' }}
                    itemStyle={{ color: '#ffffff', fontSize: '10px' }}
                  />
                  <Legend verticalAlign="top" height={24} iconSize={10} wrapperStyle={{ fontSize: '9px' }} />
                  <Bar dataKey="Current" fill="#8d9bce" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="Optimized" fill="#ffdcbc" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <span className="block text-[8px] font-mono text-primary-fixed/55 tracking-wide mt-2 text-center row">
              * Legal notice: Calculations serve as computational simulation models based on Moz Consultores audits under the terms of the Autoridade Tributária de Moçambique. Real liability assessments require an official mandate.
            </span>

          </div>



        </div>

      </div>
    </div>
  );
}
