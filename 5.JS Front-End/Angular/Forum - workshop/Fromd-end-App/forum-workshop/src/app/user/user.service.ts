import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { publicUser } from '../types/public-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: publicUser | undefined;
  USER_KEY:string = "['user']";

  constructor(private httpClient: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (err) {
      this.user = undefined;
    }
  }

  get isLogged(): boolean {
    return !!this.user;
  }

  login(email: string) {
    this.user = {
      _id:'5fa64b162183ce1728ff371d',
      username: 'Bobo',
      email: email,
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  register(email:string){
    this.user ={
      _id:'5fa64b162183ce1728ff371d',
      username:'Bobo',
      email:email
    }

    localStorage.setItem(this.USER_KEY,JSON.stringify(this.user));
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    this.user = undefined;
  }
}
