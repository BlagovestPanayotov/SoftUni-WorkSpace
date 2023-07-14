import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme-current',
  templateUrl: './theme-current.component.html',
  styleUrls: ['./theme-current.component.css'],
})
export class ThemeCurrentComponent implements OnInit {
  currentTheme: any;
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['themeId'];

    this.apiService.getThemeById(id).subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  get isLogged(): boolean{
    return this.userService.isLogged
  }
}
