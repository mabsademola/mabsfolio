import {
  Smartphone,
  Server,
  Database,
  Cloud,
  Users,
  Code,
  Brush,
  Github,
  Linkedin,
  Mail,
  Phone,
  type LucideIcon,
  Link as LinkIcon,
  GitBranch,
  Apple,
  AppWindow,
} from 'lucide-react';
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const personalInfo = {
  name: 'Mabs Ademola',
  title: 'Senior Flutter Developer | Django & Full-Stack Engineer',
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

  // Hero / Landing section (third-person, short + authoritative)
  headline:
    "Mabs Ademola — Senior Flutter Developer with 5+ years building scalable cross-platform applications for 100,000+ users.",

  // About Me section (first-person, detailed + personal)
  summary:
    "Hi, I’m Mabs 👋. For the past five years, I’ve been building and scaling mobile and web applications across industries like social commerce, on-demand services, e-commerce, social networking, and blockchain-enabled platforms. I’ve led projects from idea to production that now serve 100,000+ registered users, with multiple apps reaching 50K–70K active user bases and generating real commercial traction.\n\nI thrive in startup and distributed team environments, where I focus on clean architecture, CI/CD automation, and Agile workflows to ship secure, maintainable, and high-performing applications. Beyond just writing code, I enjoy bridging mobile and backend systems to ensure products are not only functional, but scalable and ready for growth. My work reflects a passion for turning ideas into impactful products that make a difference."
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
      { name: 'Flutter & Dart (Cross-platform)', proficiency: 95 },
      { name: 'Clean Architecture (Bloc, Riverpod, Provider)', proficiency: 90 },
      { name: 'UI/UX Implementation & Animations', proficiency: 85 },
      { name: 'Platform Integration (Camera, Maps, Push, Payments)', proficiency: 85 },
      { name: 'Kotlin (Native Android)', proficiency: 70 },
      { name: 'Swift (iOS)', proficiency: 65 },
    ],
  },
  {
    name: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Django & Django REST Framework', proficiency: 90 },
      { name: 'RESTful APIs & GraphQL', proficiency: 90 },
      { name: 'Authentication & Security (JWT, OAuth2, RBAC)', proficiency: 85 },
      { name: 'Real-time Systems (WebSocket, Django Channels)', proficiency: 80 },
      { name: 'Task Queues & Background Jobs (Celery, Redis)', proficiency: 75 },
      { name: 'Payment Integration (Stripe, Paystack, Flutterwave)', proficiency: 80 },
      { name: 'Microservices & API Gateways', proficiency: 70 },
    ],
  },
  {
    name: 'Databases & Storage',
    icon: Database,
    skills: [
      { name: 'PostgreSQL (Relational DB Design, Optimization)', proficiency: 80 },
      { name: 'Firebase Firestore (Realtime, NoSQL)', proficiency: 85 },
      { name: 'SQLite / Hive (Offline-first)', proficiency: 80 },
      { name: 'MongoDB (Document DB)', proficiency: 70 },
      { name: 'Caching (Redis, Memcached)', proficiency: 75 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'Firebase (Auth, Hosting, Messaging, Analytics)', proficiency: 90 },
      { name: 'CI/CD Automation (GitHub Actions, Bitrise)', proficiency: 85 },
      { name: 'AWS (EC2, S3, RDS, Lambda)', proficiency: 75 },
      { name: 'Google Cloud Platform (App Engine, Firestore)', proficiency: 75 },
      { name: 'Docker & Containerization', proficiency: 70 },
      { name: 'Monitoring & Logging (Sentry, CloudWatch)', proficiency: 70 },
    ],
  },
  {
    name: 'Collaboration & Workflow',
    icon: Users,
    skills: [
      { name: 'Agile / Scrum Methodologies', proficiency: 85 },
      { name: 'Git & Version Control (GitHub, GitLab, Bitbucket)', proficiency: 95 },
      { name: 'Remote Team Collaboration (Slack, Jira, Trello)', proficiency: 90 },
      { name: 'Technical Documentation (Swagger, Postman)', proficiency: 85 },
      { name: 'Unit & Integration Testing', proficiency: 80 },
    ],
  },
];


export const experience = [
  {
    company: 'OrosTech (Hafar Social)',
    role: 'Tech Lead | Senior Flutter & Backend Engineer',
    duration: 'Oct 2023 – Present',
    description:
      'Led the end-to-end technical evolution of Hafar Social from its early Firebase-based prototype into a scalable production platform now serving over 40,000 active users. Orchestrated a zero-loss migration of millions of records from Firebase Firestore and MongoDB to a robust Django + PostgreSQL infrastructure, ensuring long-term scalability and reliability. Designed and implemented high-traffic server architectures capable of processing 20,000+ daily data transfer requests between mobile and backend systems. Beyond engineering, I established technical roadmaps, mentored new developers, and spearheaded feature planning including AI-driven integrations positioning the platform for continued growth and resilience in a high-demand startup environment.'
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
        { name: 'Live App', url: 'https://play.google.com/store/apps/details?id=com.orostech.hafar', icon: LinkIcon },
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
        { name: 'Web App', url: 'https://selliohub.com', icon: AppWindow },
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
        { name: 'Android', url: 'https://play.google.com/store/apps/dev?id=6849906487342895588', icon: Smartphone },
        { name: 'iOS', url: '#', icon: Apple },
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
        { name: 'Live App', url: 'https://play.google.com/store/apps/details?id=com.dumyah.android', icon: LinkIcon },
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
