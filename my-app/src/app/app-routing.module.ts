import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login component/login.component';
import { RegisterComponent } from './components/login component/register.component';
import {UserProfileComponent} from "./components/profile_components/app.profile"
import { ManagerComponent } from './components/manager/manager.component';
import {  EmployeesComponent} from "./components/employees/employees.component";
const routes: Routes = [
  {
    path: '',
    component:AppComponent,
    pathMatch: 'full'
  },
  

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'employeeList',
    component:EmployeesComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'profile',
    component:UserProfileComponent
  },
  {
    path:'manager',
    component:ManagerComponent
  },
  {
    path:'managerProfile',
    component:ManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
