

import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService ,Employee} from '../../services/project.services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers: [ProductService]
})

export class ManagerComponent implements OnInit {
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
    
    constructor (private formBuilder: FormBuilder, private userService: ProductService,private route:Router){
        this.createForm();
        this.userService.viewManager(this.loginStatus);
        this.userService.getAllEmployeeList(this.loginStatus,this.employeeId);
    }
    emptyLocalStorage()
    {
      localStorage.clear();
      
    }
    logout()
    {
      sessionStorage.removeItem("sessionId");
    }
   createForm(){
        this.userProfileForm=this.formBuilder.group({
            name: [null,[Validators.required,Validators.minLength]],
            dob: [null,[Validators.required]],
            email:[null,[Validators.required]],
            address:[null,[Validators.required]],
            phoneNumber: [null,[Validators.required, Validators.minLength, Validators.maxLength]],
            password: [null,[Validators.required]],
            password2: [null,[Validators.required]]       
        });
    }
    onSubmit() {
        let obj= (this.userProfileForm.value);
        let obj2={
            employeeId:obj.employeeId,
            name:obj.name,
            dob:obj.dob,
            email:obj.email,
            address:obj.address,
            phoneNumber:obj.phoneNumber
        }
        this.userService.updateUserProfile(obj2,sessionStorage.getItem("sessionId")).subscribe((result)=>{console.log(result)});
        alert("User Profile Updated Succesfully");
    }
    ngOnInit(){
     this.userService.viewManager(sessionStorage.getItem("sessionId")).subscribe((user)=>{this.user=user;this.Init()});
       
      }
    Init(){
  
        console.log(this.user);
        this.name=this.user.name;
        this.dob=this.user.dob;
        this.email=this.user.email;
        this.address=this.user.address;
        this.phoneNumber=this.user.phoneNumber;

 
      
    }
    onChanges(){
        name:this.name;
        dob:this.dob;
        email:this.email;
        address:this.address;
        phoneNumber:this.phoneNumber;
        }

    changePassword(){
        this.userService.changeUserPassword(this.password,this.password2,sessionStorage.getItem("sessionId")).subscribe((result)=>{console.log(result)
        
        if(result!=null)
        {
            alert("Password changed succesfully");
        }
        else{
           alert("The specified password is wrong");
        }
        
        });
       
    }
    viewList(){
      console.log('enterd view list')
      this.route.navigate(["/employeeList"])
    }
    

}