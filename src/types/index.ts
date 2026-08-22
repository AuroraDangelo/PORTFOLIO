export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'AI & ML' | 'Extensions' | 'Web Apps' | 'Utilities';
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  accentColor?: string;
  architectureDetails?: string;
  badge?: string;
}

export interface SkillItem {
  name: string;
  level: 'Advanced' | 'Proficient' | 'Familiar';
  category: 'Languages' | 'Frontend' | 'Backend' | 'Database' | 'Tools';
  iconName: string;
  description?: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  institution: string;
  degree: string;
  status: 'In Progress' | 'Completed';
  location: string;
  description: string;
  keyLearnings: string[];
  achievements: string[];
}

export interface CodingStats {
  leetCode: {
    totalSolved: number;
    easy: number;
    medium: number;
    hard: number;
    profileUrl: string;
  };
  github: {
    publicRepos: number;
    contributionsThisYear: number;
    profileUrl: string;
  };
  geeksForGeeks: {
    solvedProblems: number;
    instituteRank: string;
    profileUrl: string;
  };
}
