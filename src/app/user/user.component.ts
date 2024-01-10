import { Component } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  users = [ 
    { id:1, name: 'Alex'}, 
  ]

}
