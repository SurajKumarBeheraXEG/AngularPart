  
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/project.services';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [ProductService]
})

export class RegisterComponent implements OnInit 
{
   
    constructor (private productService: ProductService) {
        
    }
    ngOnInit() {
        
    }

    onSubmit(RegForm:any) 
    {
        console.log(RegForm);
        this.productService.registerUser({
            "name": RegForm.name,
            "dob": RegForm.dob,
            "address": RegForm.address,
            "phoneNumber": RegForm.phoneNumber,
            "email": RegForm.email
        }).subscribe(
            (response)=>{console.log(response);
            alert('Successfully Registered!!')}
        );    
    }
     
   
}