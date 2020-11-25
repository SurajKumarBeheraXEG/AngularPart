import {Injectable} from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable()
export class ProductService{
    public httpHeaders:HttpHeaders;


    employeeId;
   constructor(private _httpClient:HttpClient){
     this.httpHeaders=new HttpHeaders()
       .set('allow-origin-access-control','*')
       .set('Content-type','application/json');
   }

   //login
   loginUser(userObj):Observable<Object>
   {
       console.log(userObj);
       return this._httpClient.post('http://localhost:8080/my-app/employee/login', JSON.stringify(userObj),{headers:this.httpHeaders}); 
   }

   //register
   registerUser(userProfileObj):Observable<Object>
   {
       return this._httpClient.post('http://localhost:8080/my-app/employee', JSON.stringify(userProfileObj), {headers:this.httpHeaders});
   }
   //updateProfile
   updateUserProfile(UserProfileObj,sessionId:string):Observable<Object>
   {   
       return this._httpClient.put('http://localhost:8080/my-app/employee/uprofile',JSON.stringify(UserProfileObj),{headers:this.httpHeaders.set('auth-token',sessionId)});
   }
   //changePassword
   changeUserPassword(oldpassword:string,newpassword:string,sessionId:string)
   {   console.log(oldpassword,newpassword)
       return this._httpClient.post('http://localhost:8080/my-app/employee/pass',{},{headers:this.httpHeaders.set('auth-token',sessionId),params:{'oldpassword':oldpassword,'newpassword':newpassword}});
   }
   // viewProfile
   viewProfile(loginStatus:string):Observable<Object>
    {
        return this._httpClient.get('http://localhost:8080/my-app/employee/profile', {headers:this.httpHeaders.set('auth-token',loginStatus)});
    }
    //viewManager
    viewManager(loginStatus:string):Observable<Object>
    {
        return this._httpClient.get('http://localhost:8080/my-app/employee/managerProfile', {headers:this.httpHeaders.set('auth-token',loginStatus)});
    }

    //getAllEmployeeList
  getAllEmployeeList(sessionId,employeeId) {
   /* const headers = { 'auth-token': sessionId };
    return this._httpClient.get<Employee[]>('http://localhost:8080/my-app/employee/manager', {
      headers,params:{'employeeId':employeeId}
    });
  }*/
  console.log(this.employeeId);
  return this._httpClient.get(`http://localhost:8080/my-app/employee/manager/${employeeId}`,{headers:this.httpHeaders.set('auth-token',sessionId)});

}
}
export class Employee{
    
    employeeId: number;
    name: String;
    dob: number;
    address:string;
    phoneNumber: String;
    email: String;
    employeeType: string;
    managerId: string;
    employee: string;

}