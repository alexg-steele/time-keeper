import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../../projects';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})

export class ProjectComponent {
  projects: Project[] = [];
  projectService: ProjectService = inject(ProjectService);

  constructor() {
    this.projects = this.projectService.getAllProjects();
  }
}
