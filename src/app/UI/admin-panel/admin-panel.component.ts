import { Component, OnInit } from '@angular/core';
import { AccountserviceService } from 'src/app/authentication/service/accountservice.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private accountservice:AccountserviceService) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
  }

}
