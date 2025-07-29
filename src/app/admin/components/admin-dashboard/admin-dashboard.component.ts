import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  cars: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}


  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars() {
    this.http.get<any[]>('http://localhost:8080/api/admin/cars')
      .subscribe(data => this.cars = data);
  }

  deleteCar(id: number) {
    this.http.delete(`http://localhost:8080/api/admin/cars/${id}`)
      .subscribe(() => {
        this.cars = this.cars.filter(car => car.id !== id);
      });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  logout(): void {
    this.http.post('http://localhost:8080/api/auth/logout', {}).subscribe({
      next: () => {
        console.log("Logged out successfully on backend");
      },
      error: err => {
        console.warn("Backend logout failed", err);
      },
      complete: () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('role');
        this.router.navigate(['/login']);
      }
    });
  }

}
