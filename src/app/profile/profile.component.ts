// src/app/components/profile/profile.component.ts
import { Component } from '@angular/core';
import { UserService } from '.././services/user.service';
import { AuthService } from '.././services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user = {
    id: null,
    name: '',
    firstName: '',
    contact: '',
    email: '',
    address: '',
    password: ''
  };

  constructor(private userService: UserService, private authService: AuthService) {
    this.loadUserProfile();
  }

  loadUserProfile() {
    const userId = this.authService.getUserId();
    this.userService.getUser(userId).subscribe(response => {
      this.user = response;
    });
  }

  updateProfile() {
    this.userService.updateUser(this.user).subscribe(response => {
      // Logique après mise à jour du profil
    });
  }
}
