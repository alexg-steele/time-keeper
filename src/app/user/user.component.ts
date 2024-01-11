import { Component, inject } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  userList: User[] = [];
  userService: UserService = inject(UserService);
  
  constructor() {
    this.userList = this.userService.getAllUsers();
  }

}
