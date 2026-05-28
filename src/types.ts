export type Language = 'en' | 'pt';

export type TabKey = 'home' | 'services' | 'about' | 'contact' | 'schedule';

export interface ServiceDetail {
  id: string;
  titleEn: string;
  titlePt: string;
  descEn: string;
  descPt: string;
  bulletsEn: string[];
  bulletsPt: string[];
  icon: string;
}

export interface Consultant {
  id: string;
  name: string;
  roleEn: string;
  rolePt: string;
  image: string;
  experience: number;
  rating: number;
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface BookingState {
  serviceId: string;
  consultantId: string;
  date: string;
  timeSlot: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  notes: string;
}
