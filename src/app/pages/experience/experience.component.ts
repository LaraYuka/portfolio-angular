import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Experience } from '../../models/experience.model';
import { EXPERIENCES } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCES;
}
