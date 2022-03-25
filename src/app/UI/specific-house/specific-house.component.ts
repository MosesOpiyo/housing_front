import { Component, OnInit } from '@angular/core';
import { AccountserviceService } from 'src/app/authentication/service/accountservice.service';

@Component({
  selector: 'app-specific-house',
  templateUrl: './specific-house.component.html',
  styleUrls: ['./specific-house.component.css']
})
export class SpecificHouseComponent implements OnInit {

  constructor(private accountservice:AccountserviceService) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
  }

}
