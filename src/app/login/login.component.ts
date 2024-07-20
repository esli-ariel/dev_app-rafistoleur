// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '.././services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/']);
      } else {
        // Afficher un message d'erreur
      }
    });
  }
}
