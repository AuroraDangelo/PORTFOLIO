import type { Project, SkillItem, JourneyMilestone, CodingStats } from '../types';

export const PERSONAL_INFO = {
  name: 'Anshika Pandey',
  role: 'Software Developer',
  headline: 'MCA Student • Developer • Problem Solver',
  bio: 'I build thoughtful, scalable, and interactive digital experiences. Passionate about full-stack engineering, clean architecture, and solving algorithmic problems.',
  email: 'anshikacodes21@gmail.com',
  github: 'https://github.com/AuroraDangelo',
  linkedin: 'https://www.linkedin.com/in/anshika-pandey-7937b82a8/',
  leetcode: 'https://leetcode.com/u/anshikapandey04/',
  location: 'India',
  availability: 'Open for Software Engineering Roles & Internships',
};

export const SKILLS_DATA: SkillItem[] = [
  // Languages
  { name: 'C++', level: 'Advanced', category: 'Languages', iconName: 'Code2', description: 'Data Structures, OOP, STL, High-Performance Algorithms' },
  { name: 'Java', level: 'Proficient', category: 'Languages', iconName: 'Coffee', description: 'OOP concepts, Multi-threading, Collections Framework' },
  { name: 'JavaScript (ES6+)', level: 'Advanced', category: 'Languages', iconName: 'FileCode2', description: 'Asynchronous Programming, Event Loop, DOM APIs' },
  { name: 'Python', level: 'Proficient', category: 'Languages', iconName: 'Binary', description: 'Scripting, Automation, AI Integrations & Data Handling' },
  { name: 'SQL', level: 'Advanced', category: 'Languages', iconName: 'Database', description: 'Complex Queries, Indexing, Schema Design & Optimization' },

  // Frontend
  { name: 'React', level: 'Advanced', category: 'Frontend', iconName: 'Layers', description: 'Hooks, Custom Hooks, State Management, Component Lifecycle' },
  { name: 'HTML5', level: 'Advanced', category: 'Frontend', iconName: 'Layout', description: 'Semantic Markup, Accessibility (a11y), SEO Best Practices' },
  { name: 'CSS3 / Modern CSS', level: 'Advanced', category: 'Frontend', iconName: 'Palette', description: 'Flexbox, Grid, Custom Properties, Glassmorphism, Keyframes' },
  { name: 'Tailwind CSS', level: 'Advanced', category: 'Frontend', iconName: 'Wind', description: 'Utility-first styling, Responsive layouts, Custom themes' },
  { name: 'Bootstrap', level: 'Proficient', category: 'Frontend', iconName: 'Grid', description: 'Rapid prototyping, Grid layouts, UI Components' },

  // Backend
  { name: 'Node.js', level: 'Advanced', category: 'Backend', iconName: 'Server', description: 'Event-driven Architecture, RESTful API design, Middleware' },
  { name: 'Express.js', level: 'Advanced', category: 'Backend', iconName: 'Cpu', description: 'Routing, JWT Authentication, Error Handling, Controller patterns' },

  // Database
  { name: 'MongoDB', level: 'Advanced', category: 'Database', iconName: 'HardDrive', description: 'NoSQL Aggregation Pipelines, Mongoose ODM, Schema Modeling' },

  // Tools
  { name: 'Git', level: 'Advanced', category: 'Tools', iconName: 'GitBranch', description: 'Version control, Branching workflows, Merge conflict resolution' },
  { name: 'GitHub', level: 'Advanced', category: 'Tools', iconName: 'Github', description: 'Open Source, Collaboration, Actions CI/CD basics' },
  { name: 'VS Code', level: 'Advanced', category: 'Tools', iconName: 'AppWindow', description: 'Debugger, Extensions, Workspace automation, Shortcuts' },
  { name: 'IntelliJ IDEA', level: 'Proficient', category: 'Tools', iconName: 'Box', description: 'Java IDE, Profiling, Refactoring tools, Build tools' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'JobPrepAI',
    title: 'JobPrepAI',
    tagline: 'Intelligent AI-powered mock interview simulator with real-time feedback & scoring',
    category: 'AI & ML',
    featured: true,
    accentColor: '#06b6d4',
    badge: 'GenAI Solution',
    description: 'An interactive AI interview platform that generates customized technical and behavioral interview questions based on user-selected tech stacks and experience levels. Evaluates speech/text responses in real-time, delivering granular feedback, technical scoring, and actionable improvement tips.',
    highlights: [
      'Interactive question generation driven by specialized role-targeted prompts',
      'Real-time response evaluation with strengths, weaknesses, and model answers',
      'Comprehensive performance scorecard with topic-wise mastery rating',
      'Clean audio & speech-to-text recording interface with instantaneous transcription'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Gemini AI API', 'Web Audio API'],
    githubUrl: 'https://github.com/AuroraDangelo/JobPrepAI',
    demoUrl: 'https://jobprepai-1-rzkd.onrender.com',
    architectureDetails: 'Utilizes modern streaming LLM endpoints with structured JSON schemas to deliver instantaneous scoring without frontend blocking.'
  },
  {
    id: 'leetcode-ai-helper',
    title: 'LeetCode AI Helper',
    tagline: 'Chrome Extension providing contextual hints, time complexity analysis, and approach breakdowns',
    category: 'Extensions',
    featured: true,
    accentColor: '#8b5cf6',
    badge: 'Chrome Extension',
    description: 'A lightweight Manifest V3 Chrome Extension built for competitive programmers. Injects directly into LeetCode problem pages to offer progressive hint ladders without spoiling full solutions, along with Big-O complexity estimations and edge-case reminders.',
    highlights: [
      'Progressive Socratic hints to guide algorithmic intuition without giving away direct code',
      'Automatic problem statement parsing and DOM context extraction',
      'Zero latency client-side caching to reduce repetitive API requests',
      'Minimalist dark mode HUD matching LeetCode’s native UI theme'
    ],
    techStack: ['JavaScript', 'Manifest V3', 'Chrome Extension APIs', 'Tailwind CSS', 'OpenAI / Gemini API'],
    githubUrl: 'https://github.com/AuroraDangelo/leetcode-ai-helper',
    architectureDetails: 'Engineered with Manifest V3 background service workers and isolated content scripts to maintain maximum browser security and memory efficiency.'
  },
  {
    id: 'real-time-news-hub',
    title: 'Real-Time News Hub',
    tagline: 'Node.js & Express dynamic news portal aggregating global headlines across multiple domains',
    category: 'Web Apps',
    featured: false,
    accentColor: '#3b82f6',
    badge: 'RESTful Platform',
    description: 'A dynamic news aggregation application delivering live breaking news, categorized feeds (Tech, Business, Science, Sports), and keyword-based headline search by integrating external RESTful news APIs with backend response caching.',
    highlights: [
      'Server-side rendering & REST API routing with Express.js',
      'Integrated rate-limited caching layer to minimize external API roundtrips',
      'Full-text search filter and country-specific publication browsing',
      'Fully responsive fluid card layout with bookmarking support'
    ],
    techStack: ['Node.js', 'Express.js', 'EJS / React', 'NewsAPI', 'Axios', 'Bootstrap'],
    githubUrl: 'https://auroradangelo.github.io/News-App/',
  },
  {
    id: 'atmospheric-weather-app',
    title: 'Atmospheric Weather App',
    tagline: 'Precision weather forecasting application featuring interactive 5-day forecasts & geolocation',
    category: 'Web Apps',
    featured: false,
    accentColor: '#14b8a6',
    badge: 'API Integration',
    description: 'An atmospheric weather web application providing real-time meteorological metrics, UV index, wind velocity, humidity, air quality index, and multi-day forecasts based on user GPS coordinates or city queries.',
    highlights: [
      'Browser Geolocation API integration with automatic fallback to IP-based location',
      'Dynamic weather condition background themes adapting to rain, snow, clear sky, and storms',
      'Hourly temperature trend curves with animated weather iconography',
      'Debounced search auto-complete for worldwide city queries'
    ],
    techStack: ['JavaScript (ES6)', 'HTML5', 'CSS3', 'OpenWeatherMap API', 'Geolocation API'],
    githubUrl: 'https://auroradangelo.github.io/Weather-Check/',
  },
  {
    id: 'secure-password-generator',
    title: 'Secure Password Generator',
    tagline: 'Cryptographically secure random password utility with customizable entropy rules',
    category: 'Utilities',
    featured: false,
    accentColor: '#d946ef',
    badge: 'Security Utility',
    description: 'A high-entropy password generation tool utilizing the Web Crypto API (`crypto.getRandomValues`). Allows users to fine-tune character lengths, symbols, numerical distributions, avoid ambiguous characters, and test password strength with zxcvbn entropy scoring.',
    highlights: [
      'Web Cryptography API for true pseudo-random cryptographic generation',
      'Real-time entropy strength meter with estimated crack time calculation',
      'One-click clipboard copy with self-clearing memory timer for enhanced security',
      'Preset security profiles (PIN, Memorable Passphrase, Ultra-Secure 32-char)'
    ],
    techStack: ['JavaScript', 'Web Crypto API', 'Tailwind CSS', 'HTML5'],
    githubUrl: 'https://auroradangelo.github.io/passkey/',
  },
  {
    id: 'tindog',
    title: 'TinDog — Pet Networking Landing Page',
    tagline: 'Playful, modern responsive web experience for pet socialization & adoption networking',
    category: 'Web Apps',
    featured: false,
    accentColor: '#f59e0b',
    badge: 'Responsive UI',
    description: 'A responsive and playful landing page concept for a pet meetup and adoption platform. Designed with clean modern layout principles, interactive testimonials carousel, feature cards, and conversion-focused call-to-actions.',
    highlights: [
      'Pixel-perfect mobile-first responsive layout across all device viewports',
      'Interactive testimonial sliders and pricing tiers with hover transitions',
      'Optimized lightweight asset delivery and semantic HTML structure'
    ],
    techStack: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    githubUrl: 'https://auroradangelo.github.io/TINDOG/',
  }
];

export const JOURNEY_DATA: JourneyMilestone[] = [
  {
    period: '2025 – 2027',
    title: '',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'University / Institute of Technology',
    status: 'In Progress',
    location: 'India',
    description: 'Pursuing advanced software engineering, distributed systems, cloud architectures, and modern web application development. Deepening algorithmic problem solving and building production-ready full-stack systems.',
    keyLearnings: [
      'Advanced Data Structures & Algorithms Optimization',
      'Distributed Systems & Cloud Computing Architectures',
      'Modern Full-Stack Engineering (MERN, TypeScript, REST & GraphQL)',
      'Artificial Intelligence Integration & Software Architecture Patterns'
    ],
    achievements: [
      'Actively developing scalable web applications and open-source projects',
      'Consistent problem solver on LeetCode & GeeksforGeeks with 300+ challenges resolved',
      'Specializing in Modern Frontend Architecture & Scalable API Engineering'
    ]
  },
  {
    period: '2022 – 2025',
    title: '',
    degree: 'Bachelor of Computer Applications',
    institution: 'University / College of Computer Science',
    status: 'Completed',
    location: 'India',
    description: 'Built strong foundational computer science knowledge in programming paradigms (C, C++, Java, JavaScript), database systems (SQL & NoSQL), operating systems, and web technologies.',
    keyLearnings: [
      'Core Programming in C++, Java & Object-Oriented Principles',
      'Relational Database Design, Normalization, SQL & MongoDB',
      'Data Structures, Algorithm Analysis & Time-Space Complexity',
      'Software Engineering Methodologies & Web Development Fundamentals'
    ],
    achievements: [
      'Graduated with First Class distinction in Computer Applications',
      'Led academic project teams in developing full-stack web applications',
      'Organized technical workshops on Web Development and Git basics'
    ]
  }
];

export const CODING_STATS_DATA: CodingStats = {
  leetCode: {
    totalSolved: 320,
    easy: 140,
    medium: 155,
    hard: 25,
    ranking: 'Top 15%',
    profileUrl: 'https://leetcode.com/u/anshikapandey04/'
  },
  github: {
    publicRepos: 18,
    contributionsThisYear: 72,
    profileUrl: 'https://github.com/AuroraDangelo'
  },
  geeksForGeeks: {
    solvedProblems: 180,
    instituteRank: 'Top 10',
    profileUrl: 'https://www.geeksforgeeks.org/profile/anshika9ukj?tab=activity'
  }
};
