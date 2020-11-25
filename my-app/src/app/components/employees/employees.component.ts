import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService ,Employee} from '../../services/project.services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [ProductService]
})

export class EmployeesComponent implements OnInit {
    public userProfileForm: FormGroup;
    public user;
    public userUpdate;
    public loginStatus;
    
    employeeArray;
    employeeId:string;
    name:string;
    dob:Date;
    email:string;
    address:string;
    phoneNumber:string;
    password:string;
    password2:string;
    
    constructor ( private userService: ProductService){
        this.userService.getAllEmployeeList(this.loginStatus,this.employeeId);
    }
  
    ngOnInit(){
     
       this.userService.getAllEmployeeList(sessionStorage.getItem("sessionId"),this.employeeId). subscribe((user)=>{this.user=user;this.Init()});
      }
    Init(){
  
       
         const sessionId = localStorage.getItem('sessionId');
           this.userService.getAllEmployeeList(sessionId,this.employeeId).subscribe((res) => {
           console.log(res);
           console.log('sdsd'+this.employeeId)
           this.employeeArray = res; });   
      
    }
}