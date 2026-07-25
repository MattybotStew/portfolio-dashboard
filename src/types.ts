export type ProjectCategory = 'react-active' | 'react-other' | 'static' | 'legacy';

export interface Project {
  name: string;
  category: ProjectCategory;
  stack: string;
  pages?: number;
  description: string;
  github: string;
  live?: string;
  lastCommit: string;
  buildStatus: 'pass' | 'fail' | 'na';
}