import { Component } from '@angular/core';
import { USERS } from '../../mock-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  users = USERS;

}
