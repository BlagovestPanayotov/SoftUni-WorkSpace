import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { publicUser } from 'src/app/types/public-user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private userService:UserService) {
    
  }

  get User(): publicUser | undefined{
    return this.userService.user
  }

}
