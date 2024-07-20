// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { TailorComponent } from './tailor/tailor.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchTailorsComponent } from './search-tailors/search-tailors.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';

import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' } },
  { path: 'client', component: ClientComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'client' } },
  { path: 'tailor', component: TailorComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'tailor' } },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'search-tailors', component: SearchTailorsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
