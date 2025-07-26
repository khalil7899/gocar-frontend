import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = this.tokenService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    const expectedRole = route.data['role'];
    const decodedToken: any = jwtDecode(token);

    if (decodedToken.role !== expectedRole) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
