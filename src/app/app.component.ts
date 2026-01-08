import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { CertificatesComponent } from "./pages/certificates/certificates.component";
import { ExperienceComponent } from "./pages/experience/experience.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    CertificatesComponent,
    ProjectsComponent,
    ContactComponent,
    ExperienceComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

