export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  type: 'internship' | 'full-time' | 'part-time' | 'contract';
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface Activity {
  id: string;
  title: string;
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages' | 'other';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Club {
  id: string;
  name: string;
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  imageUrl?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  profileImage?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}
