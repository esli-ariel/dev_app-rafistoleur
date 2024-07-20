// src/app/services/appointment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/appointments`);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/appointments`, appointment);
  }

  updateAppointment(id: number, appointment: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/appointments/${id}`, appointment);
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/appointments/${id}`);
  }
}
