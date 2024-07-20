// src/app/components/admin/admin.component.ts
import { Component } from '@angular/core';
import { UserService } from '.././services/user.service';
import { AppointmentService } from '.././services/appointment.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  users = [];
  appointments = [];

  constructor(private userService: UserService, private appointmentService: AppointmentService) {}

  manageUsers() {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    });
  }

  viewAppointments() {
    this.appointmentService.getAppointments().subscribe(response => {
      this.appointments = response;
    });
  }
}
