// src/app/components/client/client.component.ts
import { Component } from '@angular/core';
import { AppointmentService } from '.././services/appointment.service';
import { TailorService } from '.././services/tailor.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  tailors = [];
  appointments = [];

  constructor(private appointmentService: AppointmentService, private tailorService: TailorService) {}

  bookAppointment() {
    // Logique pour prendre un rendez-vous (afficher un formulaire de réservation par exemple)
  }

  searchTailors() {
    this.tailorService.getTailors().subscribe(response => {
      this.tailors = response;
    });
  }

  manageAppointments() {
    this.appointmentService.getAppointments().subscribe(response => {
      this.appointments = response;
    });
  }
}
