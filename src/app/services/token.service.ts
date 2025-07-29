import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private tokenKey = 'authToken';

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
        console.log('Saved token:', token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
