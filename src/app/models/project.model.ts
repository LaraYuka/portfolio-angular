export interface Project {
  id: number;
  title: string;
  year: number;
  shortDescription: string;
  description: string;
  motivation: string;
  technologies: string[];
  challenges: string[];
  learnings: string[];
  status: 'Finalizado' | 'Em andamento';
  githubUrl?: string;
  githubUrl2?: string;
  liveUrl?: string;
  pdfUrl?: string;
  images?: string[];
  videoUrl?: string;
}
