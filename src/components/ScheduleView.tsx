import { useState, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Users, 
  Clock, 
  Building2, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight, 
  FileCheck,
  Award,
  ChevronRight,
  ShieldCheck,
  Check,
  Loader2
} from 'lucide-react';
import { Language, BookingState } from '../types';
import { CONSULTANTS, SERVICES } from '../data';
import Counter from './Counter';

interface ScheduleViewProps {
  language: Language;
}

export default function ScheduleView({ language }: ScheduleViewProps) {
  const [step, setStep] = useState<number>(1);
  const [booking, setBooking] = useState<BookingState>({
    serviceId: SERVICES[0].id,
    consultantId: CONSULTANTS[0].id,
    date: new Date().toISOString().split('T')[0],
    timeSlot: '10:00 AM',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [bookingCode, setBookingCode] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Time Slot Options
  const timeSlots = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'];

  // Handle service select
  const selectService = (id: string) => {
    setBooking(prev => ({ ...prev, serviceId: id }));
  };

  // Handle consultant select
  const selectConsultant = (id: string) => {
    setBooking(prev => ({ ...prev, consultantId: id }));
  };

  // Input fields changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBooking(prev => ({ ...prev, [name]: value }));
  };

  // Step Navigations
  const nextStep = () => {
    if (step === 4) {
      if (!booking.companyName || !booking.contactName || !booking.email) {
        alert(language === 'en' ? 'Please fill all required corporate credentials.' : 'Por favor preencha as credenciais da sua empresa.');
        return;
      }
      submitBooking();
    } else {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const submitBooking = () => {
    setIsSubmitting(true);
    const randomCode = 'MOZ-' + Math.floor(1000 + Math.random() * 9000) + '-' + Math.floor(10 + Math.random() * 90);
    setBookingCode(randomCode);

    const service = SERVICES.find(s => s.id === booking.serviceId)!;
    const consultant = CONSULTANTS.find(c => c.id === booking.consultantId)!;

    const subject = encodeURIComponent(`[${randomCode}] Agendamento de Consulta — ${service.titlePt}`);
    const body = encodeURIComponent(
      `Referência: ${randomCode}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `PEDIDO DE AGENDAMENTO\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Serviço: ${service.titlePt}\n` +
      `Especialista: ${consultant.name}\n` +
      `Data: ${booking.date}\n` +
      `Hora: ${booking.timeSlot}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `DADOS DE CONTACTO\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Empresa: ${booking.companyName}\n` +
      `Representante: ${booking.contactName}\n` +
      `Email: ${booking.email}\n` +
      `Telefone: ${booking.phone || 'Não indicado'}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `NOTAS\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `${booking.notes || 'Sem notas adicionais.'}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=clarawanela@mozconsultores.com&su=${subject}&body=${body}`;

    setTimeout(() => {
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      setStep(5);
    }, 1500);
  };

  const resetBooking = () => {
    setBooking({
      serviceId: SERVICES[0].id,
      consultantId: CONSULTANTS[0].id,
      date: new Date().toISOString().split('T')[0],
      timeSlot: '10:00 AM',
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      notes: ''
    });
    setStep(1);
  };

  const selectedService = SERVICES.find(s => s.id === booking.serviceId)!;
  const selectedConsultant = CONSULTANTS.find(c => c.id === booking.consultantId)!;

  const stepsHeader = [
    { titleEn: 'Service Class', titlePt: 'Classe', icon: <FileCheck className="w-4 h-4" /> },
    { titleEn: 'Partner Specialist', titlePt: 'Sócio Perito', icon: <Users className="w-4 h-4" /> },
    { titleEn: 'Schedule Slot', titlePt: 'Agenda', icon: <Clock className="w-4 h-4" /> },
    { titleEn: 'Corporate Info', titlePt: 'Registo', icon: <Building2 className="w-4 h-4" /> }
  ];

  return (
    <div className="max-w-[850px] mx-auto px-6 py-12">
      
      {/* Editorial Title */}
      <div className="text-center mb-10">
        <span className="text-secondary font-sans text-xs font-bold tracking-widest uppercase block mb-1">
          {language === 'en' ? 'Institutional Booking Portal' : 'Agendamento de Consulta'}
        </span>
        <h1 className="font-headline text-2xl lg:text-3xl font-extrabold text-primary">
          {language === 'en' ? 'Schedule a Private consultation' : 'Agende o Seu Relato Consultivo'}
        </h1>
        <p className="font-sans text-xs text-on-surface-variant max-w-md mx-auto mt-2 leading-relaxed text-justify">
          {language === 'en' 
            ? 'Align your strategic goals directly with executive senior partners.'
            : 'Garanta assessoria qualificada. Escolha a classe do serviço e agende com os nossos especialistas.'}
        </p>
      </div>

      {/* Visual step indicators bars */}
      {step < 5 && (
        <div className="mb-10 block" id="step-bar">
          <div className="flex justify-between items-center text-[10px] font-bold text-on-surface-variant tracking-wider uppercase">
            {stepsHeader.map((sh, idx) => {
              const isActive = step === idx + 1;
              const isPast = step > idx + 1;
              return (
                <div key={idx} className="flex items-center gap-1.5 shrink-0">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    isActive ? 'bg-primary text-white scale-110' : isPast ? 'bg-secondary text-white' : 'bg-outline-variant/30 text-primary-container'
                  }`}>
                    {isPast ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                  </div>
                  <span className={`hidden sm:inline ${isActive ? 'text-primary font-extrabold' : 'opacity-65'}`}>
                    {language === 'en' ? sh.titleEn : sh.titlePt}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="h-1 bg-outline-variant/30 rounded-full mt-4 overflow-hidden relative">
            <motion.div 
              className="absolute left-0 top-0 bottom-0 bg-secondary"
              animate={{ width: `${((step - 1) / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      {/* Content block with step wizard transitions */}
      <div className="bg-white rounded border border-outline-variant/30 p-8 shadow-sm relative">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Select Service focus */}
          {step === 1 && (
            <motion.div 
              key="step-service"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-headline text-lg font-bold text-primary mb-1">
                  {language === 'en' ? '1. Select Strategic Service' : '1. Selecione a Classe do Serviço'}
                </h3>
                <p className="font-sans text-xs text-on-surface-variant">
                  {language === 'en' 
                    ? 'Our standard includes expert validation setups tailored for your sector.' 
                    : 'A assessoria inicial guiará a estruturação no planeamento fiscal do seu negócio.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map((s) => {
                  const isSel = booking.serviceId === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => selectService(s.id)}
                      className={`text-left p-5 rounded border-2 transition-all cursor-pointer flex items-start gap-3.5 hover:shadow ${
                        isSel ? 'border-primary bg-primary/5' : 'border-outline-variant/40 hover:border-outline-variant'
                      }`}
                    >
                      <div className={`p-2 rounded shrink-0 ${isSel ? 'bg-primary text-white' : 'bg-surface-container text-primary-container'}`}>
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-headline text-xs font-bold text-primary uppercase tracking-wider">
                          {language === 'en' ? s.titleEn : s.titlePt}
                        </h4>
                        <p className="font-sans text-[11px] text-on-surface-variant mt-1.5 leading-relaxed line-clamp-2">
                          {language === 'en' ? s.descEn : s.descPt}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 2: Choose Senior Partner */}
          {step === 2 && (
            <motion.div 
              key="step-partner"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-headline text-lg font-bold text-primary mb-1">
                  {language === 'en' ? '2. Directing Sócio / Executive partner' : '2. Escolha o Especialista Responsável'}
                </h3>
                <p className="font-sans text-xs text-on-surface-variant">
                  {language === 'en' 
                    ? 'Every senior partner brings extensive experience from elite corporate jurisdictions.'
                    : 'Garantimos aconselhamento com sócios experientes para desenhar as melhores estratégias.'}
                </p>
              </div>

              <div className={`grid ${CONSULTANTS.length === 1 ? 'grid-cols-1 max-w-xs mx-auto' : 'grid-cols-1 sm:grid-cols-3'} gap-6`}>
                {CONSULTANTS.map((c) => {
                  const isSel = booking.consultantId === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => selectConsultant(c.id)}
                      className={`text-center p-5 rounded border-2 transition-all cursor-pointer flex flex-col items-center gap-3 hover:shadow ${
                        isSel ? 'border-primary bg-primary/5' : 'border-outline-variant/40 hover:border-outline-variant'
                      }`}
                    >
                      <img 
                        src={c.image} 
                        alt={c.name} 
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-full object-cover border border-outline-variant/30 shadow-inner" 
                      />
                      <div>
                        <h4 className="font-headline text-xs font-bold text-primary tracking-wide">
                          {c.name}
                        </h4>
                        <p className="font-sans text-[10px] text-secondary font-medium tracking-tight mt-0.5">
                          {language === 'en' ? c.roleEn : c.rolePt}
                        </p>
                      </div>
                      <span className="text-[9px] font-mono text-on-surface-variant">
                        <Counter
                          value={c.experience}
                          suffix={language === 'en' ? '+ yrs expert level' : '+ anos experiência'}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 3: PICK DATE & HOURS */}
          {step === 3 && (
            <motion.div 
              key="step-date"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-headline text-lg font-bold text-primary mb-1">
                  {language === 'en' ? '3. Select Availability Date & Slot' : '3. Agende a Data e Hora da Chamada'}
                </h3>
                <p className="font-sans text-xs text-on-surface-variant">
                  {language === 'en' 
                    ? 'Appointments scheduled represent secure initial audio corporate audits.'
                    : 'As consultas agendadas representam auditorias iniciais privadas protegidas.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                
                {/* Simulated calendar input */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                    {language === 'en' ? 'SELECT DATE' : 'SELECIONE A DATA'}
                  </label>
                  <input 
                    type="date"
                    name="date"
                    value={booking.date}
                    onChange={handleInputChange}
                    className="w-full bg-surface border border-outline-variant/80 p-3.5 rounded focus:border-primary text-sm font-semibold font-sans focus:outline-none"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Micro-interactive hours picker */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                    {language === 'en' ? 'CHOOSE TIME SLOT' : 'SELECIONE A HORA DISPONÍVEL'}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((slot) => {
                      const isTimeSel = booking.timeSlot === slot;
                      return (
                        <button
                          key={slot}
                          onClick={() => setBooking(prev => ({ ...prev, timeSlot: slot }))}
                          className={`py-3 px-4 text-xs font-mono font-bold uppercase rounded border transition-all cursor-pointer ${
                            isTimeSel 
                              ? 'bg-primary text-white border-primary shadow-sm' 
                              : 'bg-surface hover:bg-outline-variant/20 text-primary border-outline-variant/45'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* STEP 4: CORPORATE INFORMATION */}
          {step === 4 && (
            <motion.div 
              key="step-corporate"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-headline text-lg font-bold text-primary mb-1">
                  {language === 'en' ? '4. Corporate Registration Details' : '4. Detalhes de Conexão Corporativa'}
                </h3>
                <p className="font-sans text-xs text-on-surface-variant">
                  {language === 'en' 
                    ? 'Please supply official organizational credentials to secure NDA protection.'
                    : 'Indique os dados oficiais de registo para salvaguardar o sigilo fiscal e acordo NDA.'}
                </p>
              </div>

              <div className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                      {language === 'en' ? 'Company Legal Name' : 'Nome Legal da Empresa'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="companyName"
                      value={booking.companyName}
                      onChange={handleInputChange}
                      placeholder="Enterprise Solutions Ltd"
                      className="bg-surface border border-outline-variant/65 focus:border-primary p-3 rounded-sm text-xs font-sans font-medium focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                      {language === 'en' ? 'Executive Director / Contact Person' : 'Representante Legal / Nome'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="contactName"
                      value={booking.contactName}
                      onChange={handleInputChange}
                      placeholder="Patricia Smith"
                      className="bg-surface border border-outline-variant/65 focus:border-primary p-3 rounded-sm text-xs font-sans font-medium focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                      {language === 'en' ? 'Corporate Email' : 'Email Profissional'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={booking.email}
                      onChange={handleInputChange}
                      placeholder="p.smith@enterprise.com"
                      className="bg-surface border border-outline-variant/65 focus:border-primary p-3 rounded-sm text-xs font-sans font-medium focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                      {language === 'en' ? 'Direct Telephone Phone' : 'Telemóvel Directo'}
                    </label>
                    <input 
                      type="text" 
                      name="phone"
                      value={booking.phone}
                      onChange={handleInputChange}
                      placeholder="+258 84 624 9497"
                      className="bg-surface border border-outline-variant/65 focus:border-primary p-3 rounded-sm text-xs font-sans font-medium focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                    {language === 'en' ? 'Key Fiscal / Corporate Challenges Summary' : 'Sumário de Desafios ou Métricas Fiscais'}
                  </label>
                  <textarea 
                    name="notes"
                    value={booking.notes}
                    onChange={handleInputChange}
                    placeholder={language === 'en' ? 'Describe briefly any pending tax litigation or desired outcomes...' : 'Resumo breve de eventuais litígios, objetivos de otimização de IVA ou re-estruturação...'}
                    rows={3}
                    className="bg-surface border border-outline-variant/65 focus:border-primary p-3 rounded-sm text-xs font-sans font-medium focus:outline-none"
                  />
                </div>

              </div>
            </motion.div>
          )}

          {/* STEP 5: FINAL RESERVATION STATEMENT */}
          {step === 5 && (
            <motion.div 
              key="step-final-statement"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <div className="w-14 h-14 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto border border-green-500/15">
                <CheckCircle className="w-8 h-8 font-bold" />
              </div>

              <div className="space-y-2">
                <h2 className="font-headline text-2xl font-extrabold text-primary">
                  {language === 'en' ? 'Consultation Slot Verified' : 'Consulta Reservada & Confirmada'}
                </h2>
                <p className="font-sans text-xs text-on-surface-variant max-w-sm mx-auto leading-relaxed text-justify">
                  {language === 'en' 
                    ? 'A secure calendar invitación has been drafted and logged directly to your professional corporate inbox.'
                    : 'O seu agendamento foi validado. Um convite de calendário encriptado foi expedido para a sua caixa de entrada.'}
                </p>
              </div>

              {/* Consultation details ticket */}
              <div className="bg-surface-container border border-outline-variant/30 rounded p-6 max-w-lg mx-auto text-left space-y-4 shadow-inner">
                <div className="flex justify-between border-b border-outline-variant/30 pb-2.5">
                  <span className="text-[10px] font-mono text-on-surface-variant font-bold uppercase tracking-wider">
                    {language === 'en' ? 'Booking Reference' : 'Código de Confirmação'}
                  </span>
                  <span className="font-mono text-sm font-extrabold text-primary">{bookingCode}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="block text-[9px] font-mono text-on-surface-variant tracking-wider uppercase">SERVICE CATEGORY</span>
                    <span className="font-sans font-bold text-primary">{language === 'en' ? selectedService.titleEn : selectedService.titlePt}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-on-surface-variant tracking-wider uppercase">ASSIGNED PARTNER</span>
                    <span className="font-sans font-bold text-primary">{selectedConsultant.name}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-on-surface-variant tracking-wider uppercase">DATE STATUS</span>
                    <span className="font-sans font-bold text-primary">{booking.date}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-on-surface-variant tracking-wider uppercase">CHOSEN TIME</span>
                    <span className="font-sans font-bold text-primary">{booking.timeSlot}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-outline-variant/20 flex gap-2 items-center">
                  <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-[9px] font-mono text-on-surface-variant uppercase tracking-wider">
                    RELIABLE PROFESSIONAL BANKING DISCLOSURE COMPLIANT
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <button
                  onClick={resetBooking}
                  className="bg-primary hover:bg-primary-container text-on-primary font-sans text-xs font-extrabold tracking-widest uppercase px-6 py-3.5 rounded shadow-sm cursor-pointer transition-all active:scale-95"
                >
                  {language === 'en' ? 'Schedule New' : 'Novo Agendamento'}
                </button>
              </div>

            </motion.div>
          )}

        </AnimatePresence>

        {/* Wizard Controls */}
        {step < 5 && (
          <div className="mt-10 pt-6 border-t border-outline-variant/30 flex justify-between items-center bg-white">
            <button
              onClick={prevStep}
              disabled={step === 1 || isSubmitting}
              className={`flex items-center gap-1 text-xs font-bold font-sans uppercase tracking-wider px-4 py-2 rounded border border-outline-variant/40 hover:bg-surface-container transition-colors ${
                step === 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'en' ? 'Back' : 'Anterior'}
            </button>

            <button
              onClick={nextStep}
              disabled={isSubmitting}
              className="flex items-center gap-1 bg-secondary hover:brightness-110 text-white font-sans text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm shadow border border-secondary/20 transition-all cursor-pointer active:scale-95"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{language === 'en' ? 'Encrypting...' : 'A Validar...'}</span>
                </>
              ) : (
                <>
                  <span>{step === 4 ? (language === 'en' ? 'Confirm and Schedule' : 'Confirmar e Agendar') : (language === 'en' ? 'Next' : 'Seguinte')}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
