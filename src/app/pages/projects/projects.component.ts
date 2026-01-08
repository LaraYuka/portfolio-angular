import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Project } from '../../models/project.model';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = PROJECTS;

  showAllProjects = false;
  sortOrder: 'asc' | 'desc' = 'desc';

  selectedProject: Project | null = null;
  videoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  toggleProjects(): void {
    this.showAllProjects = !this.showAllProjects;

    if (this.showAllProjects) {
      setTimeout(() => {
        document
          .getElementById('all-projects')
          ?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  get sortedProjects(): Project[] {
    return [...this.projects].sort((a, b) =>
      this.sortOrder === 'asc'
        ? a.year - b.year
        : b.year - a.year
    );
  }



isMobile(): boolean {
  return window.innerWidth <= 768;
}



openDetails(project: Project): void {
  this.selectedProject = project;
  this.videoUrl = null;

  document.body.style.overflow = 'hidden';

  if (!this.isMobile()) {
    setTimeout(() => {
      this.playVideo();
    });
  }
}






playVideo(): void {
  const videoId = this.getVideoId();
  if (!videoId) return;

  const embedUrl =
    `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  this.videoUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
}



openYoutube(): void {
  if (!this.selectedProject?.videoUrl) return;

  window.open(this.selectedProject.videoUrl, '_blank');
}



getVideoId(): string | null {
  if (!this.selectedProject?.videoUrl) return null;

  const url = this.selectedProject.videoUrl;

  if (url.includes('watch?v=')) {
    return url.split('watch?v=')[1].split('&')[0];
  }

  if (url.includes('youtu.be/')) {
    return url.split('youtu.be/')[1].split('?')[0];
  }

  return null;
}


closeDetails(): void {
  this.selectedProject = null;
  this.videoUrl = null;
  document.body.style.overflow = 'auto';
}
}


