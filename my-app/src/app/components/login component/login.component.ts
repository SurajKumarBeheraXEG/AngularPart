
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/project.services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    //styleUrls: ['./login.component.css'],
   providers: [ProductService]
})

export class LoginComponent implements OnInit 
{
    constructor (private productService: ProductService,private route:Router) {

    }
    onSubmit(LoginForm:any) 
    {
        console.log(LoginForm);
        this.productService.loginUser({"username": LoginForm.Username,"password": LoginForm.Password}).subscribe(
            (response)=>{
                   let obj= JSON.parse(JSON.stringify(response));
                   console.log(obj.employeeType)
                   console.log(obj.employeeId);
                   if(obj.employeeType==='manager')
                   {
                    sessionStorage.setItem("sessionId",String(obj.authtoken));
                    sessionStorage.setItem("employeeId",String(obj.employeeId));
                    console.log(obj.employeeId);
                    this.route.navigate(["/managerProfile"])
                   }
                   else
                   {
                        sessionStorage.setItem("sessionId",String(obj.authtoken));
                        sessionStorage.setItem("flag","login");
                        this.route.navigate(['/profile']);
                   }
            });
    }
    
    ngOnInit() {

    }
}
