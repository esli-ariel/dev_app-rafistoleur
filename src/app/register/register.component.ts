// src/app/components/register/register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '.././services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = {
    name: '',
    firstName: '',
    contact: '',
    email: '',
    address: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/login']);
      } else {
        // Afficher un message d'erreur
      }
    });
  }
}
