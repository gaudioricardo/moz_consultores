import { Consultant, ServiceDetail } from './types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'legalisation',
    titleEn: 'Company Legalization & Registration',
    titlePt: 'Legalização e Registo de Empresas',
    descEn: 'Full support for company incorporation, statutory amendments, and business licensing to launch and operate legally in Mozambique.',
    descPt: 'Consultoria completa para a constituição, registo e reestruturação de empresas em Moçambique, incluindo trâmites para alterações estatutárias, licenciamentos e regularização de alvarás.',
    bulletsEn: ['Company Incorporation & Registration', 'Tax Registration (NUIT)', 'Business Licenses & Permits', 'Official Gazette Publication'],
    bulletsPt: ['Constituição e Registo de Sociedades', 'Registo Fiscal (NUIT)', 'Licenciamentos e Alvarás', 'Publicação em Boletim da República'],
    icon: 'briefcase'
  },
  {
    id: 'accounting_audit',
    titleEn: 'Accounting & Fiscal Compliance',
    titlePt: 'Gestão Fiscal, Contabilística e Conformidade',
    descEn: 'Compliance with Mozambican tax legislation including VAT, IRPS, and IRPC processing, INSS regularization, and strategic tax planning to maximize legal efficiency.',
    descPt: 'Assessoria na conformidade com a legislação fiscal moçambicana, processamento e monitoria de IVA, IRPS e IRPC, regularização junto ao INSS e planeamento fiscal estratégico para maximizar a eficiência legal.',
    bulletsEn: ['VAT, IRPS & IRPC Compliance', 'INSS Registration & Filings', 'Strategic Tax Planning', 'Preventive Tax Audit'],
    bulletsPt: ['Conformidade com IVA, IRPS e IRPC', 'Regularização junto ao INSS', 'Planeamento Fiscal Estratégico', 'Revisão Contabilística Preventiva'],
    icon: 'file_check2'
  },
  {
    id: 'taxation',
    titleEn: 'Financial Management & Advisory',
    titlePt: 'Consultoria Financeira e Gestão Operacional',
    descEn: 'Complete financial diagnosis, budget structuring, cash flow management, and robust business plans to attract investment and financing.',
    descPt: 'Diagnóstico financeiro completo, estruturação de orçamentos, controlo de fluxo de caixa e desenvolvimento de planos de negócio robustos para captação de investimento e financiamento.',
    bulletsEn: ['Financial Diagnosis & Viability Analysis', 'Business Plans Development', 'Cash Flow Management', 'Cost Reduction Strategies'],
    bulletsPt: ['Diagnóstico Financeiro e Viabilidade', 'Planos de Negócio (Business Plans)', 'Controlo de Fluxo de Caixa', 'Estratégias de Redução de Custos'],
    icon: 'wallet'
  },
  {
    id: 'financial_management',
    titleEn: 'Human Resources Management',
    titlePt: 'Gestão de Recursos Humanos',
    descEn: 'Talent recruitment and selection, payroll processing, internal policy development, and compliance with Mozambican Labor Law.',
    descPt: 'Recrutamento e seleção de talentos, processamento de salários (Payroll), desenvolvimento de políticas internas e planos de cargos, e conformidade com a Lei do Trabalho moçambicana.',
    bulletsEn: ['Talent Recruitment & Selection', 'Payroll Processing', 'Internal Policies & Job Plans', 'Labor Law Compliance'],
    bulletsPt: ['Recrutamento e Seleção de Talentos', 'Processamento de Salários (Payroll)', 'Políticas Internas e Plano de Cargos', 'Conformidade com Lei do Trabalho'],
    icon: 'line_chart'
  },
  {
    id: 'human_resources',
    titleEn: 'Legal Consulting',
    titlePt: 'Consultoria Jurídica',
    descEn: 'Preventive legal advisory for businesses, drafting and reviewing commercial contracts, partnership agreements, and corporate bylaws to mitigate legal risks.',
    descPt: 'Assessoria jurídica preventiva para empresas, elaboração e revisão de contratos comerciais, acordos de parceria e estatutos sociais, mitigando riscos legais em operações comerciais.',
    bulletsEn: ['Commercial Contracts Drafting', 'Preventive Legal Advisory', 'Contract Risk Analysis', 'Shareholder Dispute Resolution'],
    bulletsPt: ['Contratos Comerciais e Parcerias', 'Assessoria Jurídica Preventiva', 'Análise de Riscos Contratuais', 'Resolução de Conflitos Societários'],
    icon: 'users'
  },
  {
    id: 'legal_consulting',
    titleEn: 'Import & Export of Goods',
    titlePt: 'Comércio Internacional',
    descEn: 'Complete advisory on import and export processes, customs procedures, tariffs, duties, and strategic international logistics and supply chain management.',
    descPt: 'Assessoria completa em processos de importação e exportação de mercadorias, orientação sobre procedimentos aduaneiros, tarifas, direitos aduaneiros e logística internacional estratégica.',
    bulletsEn: ['Import & Export Processes', 'Customs Procedures & Tariffs', 'International Logistics (Supply Chain)', 'Freight Forwarding Licensing'],
    bulletsPt: ['Processos de Importação e Exportação', 'Procedimentos Aduaneiros e Tarifas', 'Logística Internacional (Supply Chain)', 'Licenciamento de Transitários'],
    icon: 'shield_check'
  },
  {
    id: 'environmental_consulting',
    titleEn: 'Environmental Consulting',
    titlePt: 'Consultoria Ambiental',
    descEn: 'Advisory for obtaining Environmental Licensing (Categories A, B, and C), environmental impact studies, environmental audits, and corporate sustainability guidance.',
    descPt: 'Assessoria para obtenção de Licenciamento Ambiental (Categorias A, B e C), elaboração de estudos de impacto ambiental e orientação para sustentabilidade e responsabilidade social corporativa.',
    bulletsEn: ['Environmental Licensing (Cat. A, B & C)', 'Environmental Impact Studies', 'Environmental Audits', 'Corporate Social Responsibility'],
    bulletsPt: ['Licenciamento Ambiental (Cat. A, B e C)', 'Estudos de Impacto Ambiental', 'Auditorias Ambientais', 'Responsabilidade Social Corporativa'],
    icon: 'globe2'
  },
  {
    id: 'forex_licensing',
    titleEn: 'Foreign Exchange Licensing',
    titlePt: 'Licenciamento Cambial',
    descEn: 'Advisory on obtaining foreign exchange licenses from the Banco de Moçambique, ensuring compliance with exchange control regulations for international operations.',
    descPt: 'Assessoria na tramitação e obtenção de licenças cambiais junto ao Banco de Moçambique, orientação sobre pagamentos de importações, recebimentos de exportações e repatriamento de capitais.',
    bulletsEn: ['Foreign Exchange Licenses - Banco de Moçambique', 'Import Payment Approvals', 'Export Receipt Compliance', 'Capital Repatriation'],
    bulletsPt: ['Licenças Cambiais - Banco de Moçambique', 'Pagamentos de Importações', 'Recebimentos de Exportações', 'Repatriamento de Capitais'],
    icon: 'trending_up'
  },
  {
    id: 'import_export',
    titleEn: 'Accounting & Audit',
    titlePt: 'Contabilidade e Auditoria',
    descEn: 'Monthly accounting under Mozambican PGC standards, preventive audits, internal controls implementation, and transparent financial reporting.',
    descPt: 'Preparação de contabilidade geral mensal sob as normas do PGC Moçambique, auditorias preventivas, implementação de controlos internos e relatórios financeiros transparentes.',
    bulletsEn: ['Monthly Ledger Maintenance', 'PGC Trial Balance Preparation', 'Internal Controls Implementation', 'Preventive Financial Auditing'],
    bulletsPt: ['Organização de Livros Obrigatórios', 'Preparação de Balancetes Mensais', 'Sistemas de Controlo Interno', 'Auditoria Financeira Preventiva'],
    icon: 'hard_drive_download'
  }
];

export const CONSULTANTS: Consultant[] = [
  {
    id: 'clara',
    name: 'Clara',
    roleEn: 'CEO & Founder',
    rolePt: 'CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    experience: 10,
    rating: 5.0
  }
];

export const DICTIONARY = {
  en: {
    brand: 'Moz Consultores',
    tagline: 'Strategic Partnership for Your Growth',
    scheduleBtn: 'Schedule a Consultation',
    navServices: 'Services',
    navAbout: 'About',
    navContact: 'Contact',
    expertSolutions: 'Integrated Business Consultancy',
    heroPara: 'Moz Consultores is an independent business consultancy firm headquartered in Inhambane, committed to transforming operational, legal, and financial challenges into sustainable growth opportunities. We combine technical rigor, multidisciplinary expertise, and deep knowledge of the Mozambican fiscal, legal, and regulatory landscape.',
    contactExpert: 'Contact Us',
    viewPortfolio: 'View Our Services',
    ourDisciplines: 'Our Areas of Expertise',
    getInTouch: 'Let\'s work together',
    getInTouchDesc: 'Secure your business future with integrated consultancy expertise in Mozambique. Our team is ready to discuss your financial strategy, legal requirements, HR needs, and compliance obligations.',
    requestAudit: 'Request Assessment',
    viewServicesLink: 'View all services',
    details: 'Details',
    experienceYears: 'Years of Experience',
    corporateClients: 'Companies Supported',
    clientRetention: 'Success Rate',
    assetsUnderManagement: 'Companies Legalized',
    readySecure: 'Ready to Transform Your Challenges into Growth Opportunities?',
    readySecureSub: 'Moz Consultores is your One-Stop-Shop solution: from finance and taxation to legal, HR, foreign exchange, and environmental consulting — centralize all your advisory needs with a single trusted partner in Mozambique.',
    allRights: 'All rights reserved. Strategic partnership and unwavering professionalism.',
    footerLegal: 'Legal',
    footerCompany: 'Company',
    footerServices: 'Core Services',
  },
  pt: {
    brand: 'Moz Consultores',
    tagline: 'Parceria Estratégica para o seu Crescimento',
    scheduleBtn: 'Agendar Consulta',
    navServices: 'Serviços',
    navAbout: 'Sobre Nós',
    navContact: 'Contacto',
    expertSolutions: 'Consultoria Empresarial Integrada',
    heroPara: 'A Moz Consultores é uma firma de consultoria empresarial independente, sediada em Inhambane, comprometida em transformar desafios operacionais, legais e financeiros em oportunidades de crescimento sustentável. Aliamos rigor técnico, visão multidisciplinar e profundo conhecimento do cenário fiscal, legal e regulatório moçambicano.',
    contactExpert: 'Falar com a Equipa',
    viewPortfolio: 'Ver os Nossos Serviços',
    ourDisciplines: 'Nossos Serviços e Áreas de Atuação',
    getInTouch: 'Vamos trabalhar juntos',
    getInTouchDesc: 'Garanta o futuro do seu negócio com assessoria integrada de nível profissional em Moçambique. A nossa equipa está pronta para analisar e desenhar a sua estratégia financeira, jurídica, fiscal e de recursos humanos.',
    requestAudit: 'Solicitar Avaliação',
    viewServicesLink: 'Ver todos os serviços',
    details: 'Detalhes',
    experienceYears: 'Anos de Experiência',
    corporateClients: 'Empresas Apoiadas',
    clientRetention: 'Nível de Rigor / Sucesso',
    assetsUnderManagement: 'Empresas Legalizadas',
    readySecure: 'Pronto para transformar os seus desafios em oportunidades de crescimento?',
    readySecureSub: 'A Moz Consultores é a sua solução One-Stop-Shop: cobrimos desde as finanças e fiscalidade até à área jurídica, de RH, cambial e ambiental, permitindo centralizar todas as suas necessidades de consultoria num único parceiro confiável em Moçambique.',
    allRights: 'Todos os direitos reservados. Parceria estratégica e profissionalismo inabalável.',
    footerLegal: 'Legal',
    footerCompany: 'Empresa',
    footerServices: 'Serviços Principais',
  }
};

export const CASE_STUDIES = [
  {
    title: 'Precision Corporate Tax Restructuring',
    clientIndustry: 'Logística do Corredor da Beira',
    savings: '28.000.000 MT / Ano',
    roi: '340%',
    metrics: [
      { year: 'Ano 1', taxPaid: 12000000, optimized: 12000000 },
      { year: 'Ano 2', taxPaid: 13500000, optimized: 10500000 },
      { year: 'Ano 3', taxPaid: 15000000, optimized: 11200000 },
      { year: 'Ano 4', taxPaid: 16500000, optimized: 12300000 }
    ],
    summary: 'Um grupo multinacional de transporte no corredor rodoferroviário enfrentava desvios de IVA e pesada tributação. Estruturámos regimes de isenção de IVA de importação e planeamento de IRPC em conformidade com as finanças moçambicanas.'
  },
  {
    title: 'Forensic Audit & Internal Controls Revamp',
    clientIndustry: 'Provedor FinTech de Maputo',
    savings: '12.000.000 MT Evitados',
    roi: '220%',
    metrics: [
      { year: 'T1', taxPaid: 2000000, optimized: 2000000 },
      { year: 'T2', taxPaid: 3500000, optimized: 1800000 },
      { year: 'T3', taxPaid: 4500000, optimized: 1400000 },
      { year: 'T4', taxPaid: 5000000, optimized: 1000000 }
    ],
    summary: 'Implementámos verificação contabilística avançada para reconciliação automática de livros tributários com o Portal do Contribuinte, mitigando fugas no imposto retido e otimizando a declaração mensal NUIT.'
  },
  {
    title: 'Financial Modeling for Capital Acquisition',
    clientIndustry: 'Energia Solar Nacala',
    savings: '80.000.000 MT Captados',
    roi: '450%',
    metrics: [
      { year: 'Inicial', taxPaid: 5000000, optimized: 5000000 },
      { year: 'Fase 1', taxPaid: 12000000, optimized: 16000000 },
      { year: 'Fase 2', taxPaid: 20000000, optimized: 35000000 },
      { year: 'Fase 3', taxPaid: 28000000, optimized: 63000000 }
    ],
    summary: 'Desenvolvemos modelos de projeção sob a tutela do Código dos Benefícios Fiscais em Moçambique, garantindo financiamento estruturado de Série A para exploração mineral e fotovoltaica sustentável.'
  }
];
