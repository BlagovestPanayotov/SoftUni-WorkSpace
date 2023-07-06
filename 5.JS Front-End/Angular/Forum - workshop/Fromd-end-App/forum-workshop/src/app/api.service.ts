import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Post } from './types/post';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts(limit?: number) {
    return this.http.get<Post[]>(
      environment.appUrl + `/posts${limit ? `?limit=${limit}` : ''}`
    );
  }
  getThemes() {
    return this.http.get<Theme[]>(environment.appUrl + '/themes');
  }
}
