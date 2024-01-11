import { Injectable, inject } from '@angular/core';
import { Project } from '../projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectList: Project[] = [
    { id: 1, name: 'TestProject1'},
    { id: 2, name: 'TestProject2'},
    { id: 3, name: 'TestProject3'},
    { id: 4, name: 'TestProject4'},
    { id: 5, name: 'TestProject5'},
];

  constructor() { }

  getAllProjects(): Project[] {
    return this.projectList;
  }
}
