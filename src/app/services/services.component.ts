import { Component, OnInit } from '@angular/core';
import {ServicesService} from './services.service'
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public Services:any=[];
  constructor( public serviceservice : ServicesService) { }

  ngOnInit(): void {
  
    
  }
  detail=(service,price)=>{

    this.Services.push(service);
    this.Services.push(price);

    this.serviceservice.setArrData(this.Services);
    console.log('detail',  this.Services);
  }
}
