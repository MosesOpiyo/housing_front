import { Component, OnInit } from '@angular/core';
import { AccountserviceService } from 'src/app/authentication/service/accountservice.service';

@Component({
  selector: 'app-house-clients',
  templateUrl: './house-clients.component.html',
  styleUrls: ['./house-clients.component.css']
})
export class HouseClientsComponent implements OnInit {

  constructor(private accountservice:AccountserviceService) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
  }

}
