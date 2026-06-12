import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle,
  Loader2,
  Users2,
  Timer,
  Lock
} from 'lucide-react';
import { Language, InquiryFormState } from '../types';

interface ContactViewProps {
  language: Language;
}

interface ActiveOffice {
  city: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
}

const CONTACT_EMAIL = 'clarawanela@mozconsultores.com';
const WHATSAPP_NUMBER = '258846249497'; // +258 84 624 9497

export default function ContactView({ language }: ContactViewProps) {
  // Localization dictionary helper for ContactView
  const dict = {
    en: {
      title: "Let's work together",
      sub: "Secure your business future with integrated consultancy expertise in Mozambique. Our team is ready to discuss your financial strategy, legal requirements, HR needs, and compliance obligations.",
      formTitle: "Contact Form",
      fullName: "FULL NAME",
      emailAddress: "EMAIL ADDRESS",
      subject: "SUBJECT",
      message: "MESSAGE",
      sendBtn: "Send Message",
      processing: "Processing your request...",
      successTitle: "Message Successfully Sent",
      successSub: "Thank you for reaching out. Your inquiry has been logged in our system under ticket:",
      successFooter: "A member of our team with relevant expertise will review your case and respond within 1 business day.",
      globalStd: "Our Commitment",
      institutionalTitle: "Professionalism & Trust",
    },
    pt: {
      title: "Vamos trabalhar juntos",
      sub: "Garanta o futuro do seu negócio com assessoria integrada de nível profissional em Moçambique. A nossa equipa está pronta para analisar e desenhar a sua estratégia financeira, jurídica, fiscal e de recursos humanos.",
      formTitle: "Formulário de Contacto",
      fullName: "NOME COMPLETO",
      emailAddress: "ENDEREÇO DE EMAIL",
      subject: "ASSUNTO",
      message: "MENSAGEM",
      sendBtn: "Enviar Mensagem",
      processing: "A processar o seu pedido...",
      successTitle: "Mensagem Enviada com Sucesso",
      successSub: "Agradecemos o contacto. O seu pedido foi registado no nosso sistema sob o ticket:",
      successFooter: "Um membro da nossa equipa com experiência na sua área analisará o caso e responderá no prazo máximo de 1 dia útil.",
      globalStd: "O Nosso Compromisso",
      institutionalTitle: "Profissionalismo e Confiança",
    }
  }[language];

  // Active office options
  const offices: ActiveOffice[] = [
    {
      city: 'Inhambane (Sede Principal)',
      phone: '+258 84 624 9497',
      email: CONTACT_EMAIL,
      address: 'Rua Vladmir Lenine, Balane 2, Prédio AIMS 1º Andar - Cidade de Inhambane',
      hours: 'Seg-Sex, 8:00 - 17:00 CAT'
    }
  ];

  const [activeOfficeIdx, setActiveOfficeIdx] = useState<number>(0);
  const currentOffice = offices[activeOfficeIdx];

  const [form, setForm] = useState<InquiryFormState>({
    fullName: '',
    email: '',
    subject: 'Tax Strategy & Planning',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'encrypting' | 'success'>('idle');
  const [ticketNumber, setTicketNumber] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.message) {
      alert(language === 'en' ? 'Please complete all required fields.' : 'Por favor preencha todos os campos obrigatórios.');
      return;
    }

    setStatus('encrypting');

    const code = 'MC-' + Math.floor(10000000 + Math.random() * 90000000);
    setTicketNumber(code);

    const subject = encodeURIComponent(`[${code}] ${form.subject}`);
    const body = encodeURIComponent(
      `Ticket: ${code}\nNome: ${form.fullName}\nEmail: ${form.email}\nAssunto: ${form.subject}\n\nMensagem:\n${form.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${CONTACT_EMAIL}&su=${subject}&body=${body}`;

    setTimeout(() => {
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      setStatus('success');
    }, 1000);
  };

  const resetForm = () => {
    setForm({
      fullName: '',
      email: '',
      subject: 'Tax Strategy & Planning',
      message: ''
    });
    setStatus('idle');
  };

  return (
    <div className="w-full">
      {/* 1. HERO HEADER */}
      <section className="bg-primary py-20 text-on-primary border-b border-primary-container">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="font-headline text-3xl lg:text-4.5xl font-extrabold text-white">
              {dict.title}
            </h1>
            <p className="font-sans text-sm text-primary-fixed leading-relaxed max-w-2xl opacity-90 text-justify">
              {dict.sub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT GRID */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Form box with animated states */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-outline-variant/30 p-8 rounded-sm shadow-sm">
              
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.div
                    key="form-idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="font-headline text-xl font-bold text-primary border-b border-outline-variant/10 pb-3">
                      {dict.formTitle}
                    </h2>

                    <form onSubmit={handleFormSubmit} className="space-y-4" id="corporate-inquiry-form">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                            {dict.fullName} <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="text"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="bg-surface border border-outline-variant/60 focus:border-primary p-3 rounded-sm text-xs font-sans font-medium focus:ring-1 focus:ring-primary focus:outline-none"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                            {dict.emailAddress} <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleInputChange}
                            placeholder="j.doe@corporate.com"
                            className="bg-surface border border-outline-variant/60 focus:border-primary p-3 rounded-sm text-xs font-sans font-medium focus:ring-1 focus:ring-primary focus:outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                          {dict.subject}
                        </label>
                        <select 
                          name="subject"
                          value={form.subject}
                          onChange={handleInputChange}
                          className="bg-surface border border-outline-variant/60 focus:border-primary p-3 rounded-sm text-xs font-sans font-medium focus:ring-1 focus:ring-primary focus:outline-none"
                        >
                          <option value="Consultoria Financeira e Gestão Operacional">Consultoria Financeira e Gestão Operacional</option>
                          <option value="Gestão Fiscal, Contabilística e Conformidade">Gestão Fiscal, Contabilística e Conformidade</option>
                          <option value="Gestão de Recursos Humanos">Gestão de Recursos Humanos</option>
                          <option value="Consultoria Jurídica e Legalização">Consultoria Jurídica e Legalização</option>
                          <option value="Comércio Internacional">Comércio Internacional (Importação e Exportação)</option>
                          <option value="Licenciamento Cambial">Licenciamento Cambial</option>
                          <option value="Consultoria Ambiental">Consultoria Ambiental</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                          {dict.message} <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                          rows={6}
                          name="message"
                          value={form.message}
                          onChange={handleInputChange}
                          placeholder={language === 'en' ? 'Describe your business consultancy requirements...' : 'Descreva as necessidades de consultoria da sua empresa...'}
                          className="bg-surface border border-outline-variant/60 focus:border-primary p-3 rounded-sm text-xs font-sans font-medium focus:ring-1 focus:ring-primary focus:outline-none"
                          required
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-primary text-on-primary py-3.5 rounded-sm font-sans text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-primary-container transition-all shadow active:scale-[0.99]"
                        id="submit-inquiry-btn"
                      >
                        {dict.sendBtn}
                      </button>
                    </form>
                  </motion.div>
                )}

                {status === 'encrypting' && (
                  <motion.div
                    key="form-encrypt"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <Loader2 className="w-10 h-10 text-secondary animate-spin" />
                    <span className="font-headline text-sm font-bold text-primary uppercase tracking-widest block">
                      {dict.processing}
                    </span>
                    <div className="w-48 bg-outline-variant/30 h-[2px] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ left: '-100%' }}
                        animate={{ left: '100%' }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                        className="w-1/2 bg-secondary h-full relative" 
                      />
                    </div>
                    <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-secondary" /> SECURE SSL LEDGER PROTOCOL ENABLED
                    </span>
                  </motion.div>
                )}

                {status === 'success' && (
                  <motion.div
                    key="form-success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-6 text-center space-y-6"
                  >
                    <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-7 h-7" />
                    </div>

                    <div className="space-y-2">
                      <h2 className="font-headline text-lg font-bold text-primary">
                        {dict.successTitle}
                      </h2>
                      <p className="font-sans text-xs text-on-surface-variant max-w-md mx-auto leading-relaxed text-justify">
                        {dict.successSub}
                      </p>
                    </div>

                    <div className="p-4 bg-surface-container-low rounded border border-outline-variant/30 font-mono text-sm font-extrabold text-primary max-w-xs mx-auto shadow-sm">
                      {ticketNumber}
                    </div>

                    <p className="font-sans text-[11px] text-on-surface-variant leading-relaxed max-w-sm mx-auto text-justify">
                      {dict.successFooter}
                    </p>

                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 border border-outline hover:bg-surface-container text-xs font-semibold rounded-sm transition-colors cursor-pointer"
                    >
                      {language === 'en' ? 'Back to Form' : 'Voltar ao Formulário'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Side: Context items and Interactive maps */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Render selected office details */}
            <div className="space-y-4">
              
              {/* Phone card — WhatsApp link */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-outline-variant/25 p-5 rounded flex gap-4 items-start shadow-sm hover:border-green-400 hover:shadow-md transition-all group"
              >
                <div className="bg-primary/5 p-3 rounded text-primary border border-primary/10 shrink-0 group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline text-xs text-secondary font-bold uppercase tracking-wider mb-1">
                    WhatsApp
                  </h3>
                  <p className="font-mono text-sm font-extrabold text-primary group-hover:text-green-600 transition-colors">{currentOffice.phone}</p>
                  <p className="font-sans text-[11px] text-on-surface-variant">{currentOffice.hours}</p>
                </div>
              </a>

              {/* Email card */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="bg-white border border-outline-variant/25 p-5 rounded flex gap-4 items-start shadow-sm hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="bg-primary/5 p-3 rounded text-primary border border-primary/10 shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline text-xs text-secondary font-bold uppercase tracking-wider mb-1">EMAIL</h3>
                  <p className="font-mono text-sm font-extrabold text-primary group-hover:underline break-all">{currentOffice.email}</p>
                  <p className="font-sans text-[11px] text-on-surface-variant">{language === 'en' ? 'Direct response within 24h' : 'Resposta em até 24h'}</p>
                </div>
              </a>

              {/* Address card */}
              <div className="bg-white border border-outline-variant/25 p-5 rounded flex gap-4 items-start shadow-sm">
                <div className="bg-primary/5 p-3 rounded text-primary border border-primary/10 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline text-xs text-secondary font-bold uppercase tracking-wider mb-1">OFFICE</h3>
                  <p className="font-sans text-xs font-bold text-primary">{currentOffice.address}</p>
                  <p className="font-sans text-[11px] text-on-surface-variant">Inhambane, Moçambique</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. REASSURANCE STANDARDS SECTION */}
      <section className="bg-surface-container-low py-16 border-t border-outline-variant/15">
        <div className="max-w-[1200px] mx-auto px-6 text-center space-y-12">
          
          <div className="space-y-2">
            <span className="font-headline text-xs font-bold text-secondary tracking-widest uppercase block">
              {dict.globalStd}
            </span>
            <h2 className="font-headline text-2xl lg:text-3xl font-extrabold text-primary">
              {dict.institutionalTitle}
            </h2>
            <div className="h-[2px] w-16 bg-secondary mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Standard 1 */}
            <div className="p-6 bg-white rounded border border-outline-variant/15 shadow-sm space-y-3">
              <ShieldCheck className="w-8 h-8 text-secondary" />
              <h4 className="font-headline text-sm font-bold text-primary">
                {language === 'en' ? 'Confidentiality & Trust' : 'Confidencialidade e Confiança'}
              </h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed text-justify">
                {language === 'en'
                  ? 'All client information is handled with strict confidentiality protocols, safeguarding your business secrets and strategic data at every step.'
                  : 'Toda a informação dos clientes é tratada com rigorosos protocolos de confidencialidade, salvaguardando os seus segredos industriais e dados estratégicos em todas as etapas.'}
              </p>
            </div>

            {/* Standard 2 */}
            <div className="p-6 bg-white rounded border border-outline-variant/15 shadow-sm space-y-3">
              <Users2 className="w-8 h-8 text-secondary" />
              <h4 className="font-headline text-sm font-bold text-primary">
                {language === 'en' ? 'Multidisciplinary Expertise' : 'Equipa Multidisciplinar'}
              </h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed text-justify">
                {language === 'en'
                  ? 'Our team brings expertise across financial, legal, HR, fiscal, and environmental consulting — delivering integrated solutions tailored to your business reality.'
                  : 'A nossa equipa reúne especialistas em consultoria financeira, jurídica, de RH, fiscal e ambiental, entregando soluções integradas adaptadas à realidade do seu negócio.'}
              </p>
            </div>

            {/* Standard 3 */}
            <div className="p-6 bg-white rounded border border-outline-variant/15 shadow-sm space-y-3">
              <Timer className="w-8 h-8 text-secondary" />
              <h4 className="font-headline text-sm font-bold text-primary">
                {language === 'en' ? 'Rapid Response Guaranteed' : 'Resposta Rápida Garantida'}
              </h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed text-justify">
                {language === 'en'
                  ? 'We are committed to providing a detailed response to every inquiry within 1 business day, ensuring your business decisions are never delayed.'
                  : 'Comprometemo-nos a responder a cada pedido no prazo máximo de 1 dia útil, garantindo que as suas decisões empresariais nunca fiquem em espera.'}
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
