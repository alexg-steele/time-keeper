import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// import { User } from '../../user';
import { USERS } from '../../mock-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  users = USERS;

}
