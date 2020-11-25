import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login component/login.component';
import { RegisterComponent } from "./components/login component/register.component";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserProfileComponent } from "./components/profile_components/app.profile";
import { ManagerComponent } from './components/manager/manager.component';
import { EmployeesComponent } from './components/employees/employees.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    ManagerComponent,
    EmployeesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
