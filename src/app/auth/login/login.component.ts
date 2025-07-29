import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

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

  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) {}

  onLogin() {
    const credentials = {
      email: this.email, // BE expects email
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (res) => {

      const token = res.token;
      const role = res.role;

      this.tokenService.setToken(token);
      localStorage.setItem('role', role);

      alert('✅ Logged in successfully!');

      if (role === 'ADMIN') {
        this.router.navigate(['/admin-dashboard']);
      } else {
        this.router.navigate(['/client-dashboard']);
      }
    },
      error: err => {
        console.error(err);
        alert('❌ Login failed');
      }
    });
  }
}
