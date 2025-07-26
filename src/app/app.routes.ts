import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard], // Optional
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  }
];
