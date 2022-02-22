import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

import { environment } from 'src/environments/environment';
import { AuthserviceService } from '../authservice/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  constructor(private http:HttpClient, private auth:AuthserviceService, private snackbar:MatSnackBar, private route:Router) { }

  register(credentials:any){
    this.http.post(`${environment.BASE_URL}users/register`,credentials).subscribe(response=>{
      this.snackbar.open(`Congratulations ${credentials.get('username')}, you have successfully registered`,"Thank you")
      
    },error => {
      this.snackbar.open(`There was a problem creating your account, please check your credentials and try again.`,"Dismiss",{duration:3000})
      alert(error)
      console.log(error)
    })
  }
  login(credentials:any){
    this.http.post(`${environment.BASE_URL}users/login`,credentials).subscribe((res:any)=>{
      sessionStorage.setItem('token', res['token'])
      this.auth.authentication(true)
      this.snackbar.open(`Welcome back`,"Dismiss")
    },error=>{
      this.snackbar.open(`There was a problem logging you in, please check your credentials and try again.`,"Dismiss",{duration:3000})
      console.log(error)
    })
  }
}
