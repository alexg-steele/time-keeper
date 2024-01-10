import { Component } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  users: User[] = [];

  // TODO: Create user service
  // constructor(private userService: UserService) {}

}
