import {
  Smartphone,
  Server,
  Database,
  Cloud,
  Code,
  Brush,
  Github,
  Linkedin,
  Mail,
  Phone,
  type LucideIcon,
  Link,
  GitBranch,
} from 'lucide-react';
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const personalInfo = {
  name: 'Mabs Ademola',
  title: 'Senior Flutter Developer & Full-Stack Engineer',
  location: 'Lagos, Nigeria',
  email: 'mabsademola@gmail.com',
  phone: '+234-915-339-6835',
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/mabsademola',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mabs-ademola',
      icon: Linkedin,
    },
  ],
  summary:
    "A results-driven Senior Flutter Developer with over five years of expertise in architecting and scaling cross-platform mobile applications. With a strong history of leading development in startup environments, I have a proven ability to deliver high-quality, maintainable, and high-performing applications from concept to launch. My focus is on applying modern software architecture to build secure and scalable systems that bridge mobile and backend services effectively.",
};

type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: { name: string; proficiency: number }[];
};

export const skills: SkillCategory[] = [
  {
    name: 'Mobile Development',
    icon: Smartphone,
    skills: [
      { name: 'Flutter & Dart', proficiency: 95 },
      { name: 'Kotlin (Android)', proficiency: 70 },
      { name: 'Swift (iOS)', proficiency: 60 },
      { name: 'Clean Architecture', proficiency: 90 },
    ],
  },
  {
    name: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Django (Python)', proficiency: 85 },
      { name: 'RESTful APIs', proficiency: 90 },
      { name: 'WebSocket', proficiency: 75 },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', proficiency: 80 },
      { name: 'Firebase Firestore', proficiency: 85 },
      { name: 'MongoDB', proficiency: 70 },
      { name: 'SQLite / Hive', proficiency: 80 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS & GCP', proficiency: 75 },
      { name: 'Firebase', proficiency: 90 },
      { name: 'CI/CD (GitHub Actions)', proficiency: 85 },
      { name: 'Docker', proficiency: 70 },
    ],
  },
];

export const experience = [
  {
    company: 'OrosTech (Hafar Social)',
    role: 'Tech Lead | Senior Flutter Developer',
    duration: 'Oct 2023 – Present',
    description:
      'Engineered and scaled the Hafar mobile app, growing the user base to over 70,000. Architected the application using a Feature-First Clean Architecture, executed a seamless migration of millions of records from Firebase, and implemented robust CI/CD pipelines, which decreased release cycles by 60%.',
  },
  {
    company: 'Sellio',
    role: 'Founder & Lead Flutter Developer',
    duration: 'Apr 2024 – Dec 2024',
    description:
      'Conceptualized and developed a hybrid social e-commerce platform from the ground up. Led the front-end development for Android, iOS, and Web using Flutter, acquiring over 2,000 users in the first six months through strategic, user-centric design and organic growth initiatives.',
  },
  {
    company: 'Terkuaz Software Solution',
    role: 'Lead Flutter Developer',
    duration: 'Jan 2023 – May 2024',
    description:
      'Led and mentored a team of developers in building two flagship on-demand service applications (Click & Click Provider). I established the architectural foundation using Clean Architecture with GetX and Dartz, ensuring the development of a scalable and maintainable codebase.',
  },
  {
    company: 'Ultaininity Global Group',
    role: 'Flutter Developer',
    duration: 'Apr 2022 – Oct 2022',
    description:
      'Contributed to the development of blockchain-based fintech applications, including a launchpad and NFT marketplace. My primary focus was on creating secure, high-performance mobile apps, successfully achieving a 99% crash-free session rate through meticulous testing and performance optimization.',
  },
];

export const projects: (Omit<ImagePlaceholder, 'imageUrl'> & {
  tech: string[];
  links: { name: string; url: string, icon: LucideIcon }[];
  image: ImagePlaceholder;
})[] = [
  {
    id: 'hafar',
    description: 'A social dating app scaled to 70k+ users with a feature-rich experience including real-time chat and profile matching.',
    imageHint: 'social app',
    tech: ['Flutter', 'Django', 'PostgreSQL', 'Firebase', 'CI/CD'],
    image: PlaceHolderImages.find((p) => p.id === 'hafar')!,
    links: [
        { name: 'Live App', url: 'https://play.google.com/store/apps/details?id=com.orostech.hafar', icon: Link },
        { name: 'Repository', url: 'https://github.com/mabsademola', icon: GitBranch },
    ],
  },
  {
    id: 'sellio',
    description: 'A social commerce platform I founded, combining social feeds with a full e-commerce marketplace for a seamless user journey.',
    imageHint: 'ecommerce store',
    tech: ['Flutter', 'Django', 'AWS S3', 'Firebase'],
    image: PlaceHolderImages.find((p) => p.id === 'sellio')!,
    links: [
        { name: 'Live App', url: 'https://selliohub.com', icon: Link },
        { name: 'Repository', url: 'https://github.com/mabsademola', icon: GitBranch },
    ],
  },
  {
    id: 'click',
    description: 'An on-demand services platform connecting users with local service providers, similar to Uber but for a wide range of services.',
    imageHint: 'service booking',
    tech: ['Flutter', 'GetX', 'Firebase', 'Google Maps API'],
    image: PlaceHolderImages.find((p) => p.id === 'click')!,
    links: [
        { name: 'Live App', url: 'https://play.google.com/store/apps/dev?id=6849906487342895588', icon: Link },
        { name: 'Repository', url: 'https://github.com/mabsademola', icon: GitBranch },
    ],
  },
  {
    id: 'dumyah',
    description: 'An online shopping application with a focus on a smooth, intuitive user experience and multi-language support.',
    imageHint: 'online shopping',
    tech: ['Flutter', 'Firebase', 'REST APIs'],
    image: PlaceHolderImages.find((p) => p.id === 'dumyah')!,
    links: [
        { name: 'Live App', url: 'https://play.google.com/store/apps/details?id=com.dumyah.android', icon: Link },
        { name: 'Repository', url: 'https://github.com/mabsademola', icon: GitBranch },
    ],
  },
  {
    id: 'ultaininity',
    description: 'A suite of blockchain-based fintech apps, including a crypto launchpad and an NFT marketplace, built with a focus on security.',
    imageHint: 'blockchain crypto',
    tech: ['Flutter', 'Blockchain', 'Solidity'],
    image: PlaceHolderImages.find((p) => p.id === 'ultaininity')!,
    links: [
        { name: 'Repository', url: 'https://github.com/mabsademola', icon: GitBranch },
    ],
  },
  {
    id: 'primetag',
    description: 'Developed and optimized multilingual Flutter applications with full Arabic support to enhance user engagement in the MENA region.',
    imageHint: 'corporate website',
    tech: ['Flutter', 'Localization'],
    image: PlaceHolderImages.find((p) => p.id === 'primetag')!,
    links: [
        { name: 'Repository', url: 'https://github.com/mabsademola', icon: GitBranch },
    ],
  },
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const contactDetails = [
  {
    label: 'Email',
    value: personalInfo.email,
    icon: Mail,
    href: `mailto:${personalInfo.email}`
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    icon: Phone,
    href: `tel:${personalInfo.phone}`
  },
]
