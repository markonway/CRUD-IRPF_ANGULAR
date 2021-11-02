import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ViewIrpfsComponent } from '../app/views/irpf/view-irpfs/view-irpfs.component';
import { ViewDashboardComponent } from '../app/views/irpf/view-dashboard/view-dashboard.component';
import { ViewCreateIrpfComponent } from '../app/views/irpf/view-create-irpf/view-create-irpf.component';
import { ViewContribuinteListComponent } from '../app/views/contribuinte/view-contribuinte-list/view-contribuinte-list.component';
import { LoginComponent } from '../app/views/login/login.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: '', component: ViewDashboardComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: 'dashboard', component: ViewDashboardComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: 'create-irpf', component: ViewCreateIrpfComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: 'irpfs', component: ViewIrpfsComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: 'contribuintes-list', component: ViewContribuinteListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'dashboard', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule { }
