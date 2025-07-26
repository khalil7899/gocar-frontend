import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';

const routes: Routes = [];

export const adminRoutes: Routes = [
  { path: 'dashboard', component: ClientDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
