import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fullName = '';
  email = '';
  password = '';
  role = 'CLIENT'; // default
  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user = {
      username: this.fullName,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.authService.register(user).subscribe({
      next: () => {
        alert('Registered successfully!');
        this.router.navigate(['/login']); // Optional redirect
    },
    error: err => {
      console.error(err);
      const message = err?.error?.message || 'Something went wrong!';
      alert('❌ Error: ' + message);
    }
    });
  }
}
