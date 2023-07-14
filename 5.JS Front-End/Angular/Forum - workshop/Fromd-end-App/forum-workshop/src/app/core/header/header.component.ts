import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private userService: UserService) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get userName(): string | undefined {
    return this.userService.user?.username;
  }
}
