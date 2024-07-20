// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';
  private user: any = null;
  private storage:any =[];

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.storage = localStorage;
    }
    this.loadUser();
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }

  getRole(): string {
    return this.user ? this.user.role : null;
  }

  getUserId(): number {
    return this.user ? this.user.id : null;
  }

  private loadUser() {
    if (this.storage) {
      const userData = this.storage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      }
    }
  }

  private saveUser(user: any) {
    if (this.storage) {
      this.storage.setItem('user', JSON.stringify(user));
      this.user = user;
    }
  }

  logout() {
    if (this.storage) {
      this.storage.removeItem('user');
      this.user = null;
    }
  }
}