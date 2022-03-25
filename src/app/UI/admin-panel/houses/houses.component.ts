import { Component, OnInit } from '@angular/core';
import { AccountserviceService } from 'src/app/authentication/service/accountservice.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  constructor(private accountservice:AccountserviceService) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
  }

}
