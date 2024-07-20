// src/app/components/tailor/tailor.component.ts
import { Component } from '@angular/core';
import { AppointmentService } from '.././services/appointment.service';

@Component({
  selector: 'app-tailor',
  templateUrl: './tailor.component.html',
  styleUrls: ['./tailor.component.scss']
})
export class TailorComponent {
  appointments = [];

  constructor(private appointmentService: AppointmentService) {}

  viewAppointments() {
    this.appointmentService.getAppointments().subscribe(response => {
      this.appointments = response;
    });
  }

  acceptAppointment(appointmentId: number) {
    this.appointmentService.updateAppointment(appointmentId, { status: 'accepted' }).subscribe(response => {
      this.viewAppointments();
    });
  }

  rejectAppointment(appointmentId: number) {
    this.appointmentService.updateAppointment(appointmentId, { status: 'rejected' }).subscribe(response => {
      this.viewAppointments();
    });
  }
}
