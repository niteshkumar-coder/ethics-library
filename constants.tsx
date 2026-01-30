
import React from 'react';
import { Book } from './types';

export const BRAND = {
  NAME: 'ETHICS',
  SUBTITLE: 'Library',
  TAGLINE: 'Dedicated to Moral & Intellectual Mastery',
  MISSION: 'Empowering the enlightened seeker through integrity, precision, and unwavering dedication.'
};

export const CONTACT_INFO = {
  SANCTUARY: {
    NAME: 'Ethics Main Sanctuary',
    ADDRESS: 'BMF Street, Atal Path, behind Visvesvaraya Bhawan, corner, Punaichak, Rajbansi Nagar, Patna, Bihar 801103',
    MAP_LINK: 'https://share.google/kcmp20KnXC4q0qfvs'
  },
  PHONE: '080837 39995',
  HOURS: 'Daily: 6:00 AM – 11:30 PM',
  FULL_HOURS: {
    Monday: '6:00 am – 11:30 pm',
    Tuesday: '6:00 am – 11:00 pm',
    Wednesday: '6:00 am – 11:30 pm',
    Thursday: '6:00 am – 11:30 pm',
    Friday: '6:00 am – 11:30 pm',
    Saturday: '6:00 am – 11:30 pm',
    Sunday: '6:00 am – 11:30 pm',
  },
  SOCIAL: {
    YOUTUBE: 'https://youtube.com',
    INSTAGRAM: 'https://instagram.com',
    FACEBOOK: 'https://facebook.com',
    X: 'https://x.com'
  }
};

export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'The Foundation of Ethical Thought',
    author: 'Sage Marcus',
    category: 'Philosophy',
    cover: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=400',
    description: 'An exhaustive analytical study of ancient ethics, bridging the gap between Aristotelian virtue and modern digital leadership. This volume serves as a roadmap for scholars seeking to integrate timeless moral principles into the complex hierarchies of the contemporary pedagogical landscape.',
    rating: 5,
    isPremium: true
  },
  {
    id: '2',
    title: 'Aesthetics of the Virtuous',
    author: 'Julian Thorne',
    category: 'Art',
    cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400',
    description: 'A profound exploration into the visual vernacular of noble architectures and the curated ethical spaces that define civilizations. Julian Thorne examines how the geometry of our surroundings influences the elevation of the human spirit and the cultivation of inner stillness through classical design.',
    rating: 4.8,
    isPremium: true
  },
  {
    id: '3',
    title: 'Sovereignty of Mind',
    author: 'E. R. Masterson',
    category: 'History',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400',
    description: 'Offering a deep historical perspective on self-governance and moral dedication, this work traces the evolution of intellectual independence from the Stoic traditions to the present day. It remains an essential treatise for those pursuing the absolute mastery of their own consciousness in a distracting world.',
    rating: 4.9,
    isPremium: false
  }
];

export const REVIEWS = [
  { id: 1, name: 'Aryan Kumar', status: 'UPSC Aspirant', comment: 'The clarity found here is unmatched. Ethics Library has provided the moral compass my research needed.', rating: 5, initials: 'AK' },
  { id: 2, name: 'Ananya Sharma', status: 'Medical Researcher', comment: 'A sanctuary that respects the weight of knowledge. Integrity is in the very walls.', rating: 5, initials: 'AS' },
  { id: 3, name: 'Vikram Singh', status: 'IIT-JEE Scholar', comment: 'Precision studio seating allows for hours of deep, ethical focus on the future.', rating: 5, initials: 'VS' }
];
