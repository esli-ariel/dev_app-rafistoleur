// src/app/components/search-tailors/search-tailors.component.ts
import { Component, OnInit } from '@angular/core';
import { TailorService } from '.././services/tailor.service';
import { AppointmentService } from '.././services/appointment.service';


@Component({
  selector: 'app-search-tailors',
  templateUrl: './search-tailors.component.html',
  styleUrls: ['./search-tailors.component.scss']
})
export class SearchTailorsComponent implements OnInit {
  tailors:any = [];

  constructor(private tailorService: TailorService, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.loadTailors();
  }

  search(event: Event): void {
    const input = event.target as HTMLInputElement;
    const query = input.value;

    this.tailorService.searchTailors(query).subscribe((results: any[]) => {
      this.tailors = results;
    });
  }

  loadTailors(): void {
    this.tailorService.getTailors().subscribe((results: any[]) => {
      this.tailors = results;
    });
  }

  bookAppointment(tailorId: number): void {
    const appointment = {
      client_id: 1, // Remplacez par l'ID réel du client connecté
      tailor_id: tailorId,
      status: 'pending'
    };
    this.appointmentService.createAppointment(appointment).subscribe(response => {
      // Logique après avoir pris un rendez-vous
    });
  }
}
