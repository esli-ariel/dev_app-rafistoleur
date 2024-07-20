// src/app/services/tailor.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TailorService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  searchTailors(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/tailors?query=${query}`);
  }

  getTailors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tailors`);
  }
}
