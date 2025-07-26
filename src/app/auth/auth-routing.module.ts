import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
// import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  // { path: 'client', component: ClientDashboardComponent, canActivate: [AuthGuard], data: { role: 'CLIENT' } },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
