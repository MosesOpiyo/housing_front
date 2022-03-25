import { Component, OnInit } from '@angular/core';
import { AccountserviceService } from 'src/app/authentication/service/accountservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private accountservice:AccountserviceService) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
  }

}
