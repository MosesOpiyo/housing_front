import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthserviceService } from 'src/app/authentication/authservice/authservice.service'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HouseServiceService {
  house:any
  constructor(private http:HttpClient, private route:Router,private snackbar:MatSnackBar,private authService:AuthserviceService) { }
  
  add_house(house:any){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    this.http.post(`${environment.BASE_URL}housing/new_house`,house.value,{'headers':headers}).subscribe(response=>{
      this.snackbar.open(`New house ${house.value.name} added to your lot`,"Thank you",{duration:3000})
      this.route.navigate(['admin-panel'])
    },error =>{
      this.snackbar.open(`There was a problem with house development.PLease enter correct house details`,"Alright",{duration:3000})
      console.log(error)
    })
  }
  
  
}
