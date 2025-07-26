import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    const credentials = {
      email: this.email, // BE expects email
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (res) => {
        alert('Login successful!');
        localStorage.setItem('token', res.token);
        // Optionally route to dashboard
      },
      error: err => alert('Login failed: ' + err.error.message)
    });
  }
}
