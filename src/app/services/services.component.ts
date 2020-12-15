import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public Price:any=[];
  public Service:any=[];
  constructor() { }

  ngOnInit(): void {
  
    
  }
  detail=(service,price)=>{
    this.Price.push(price);
    this.Service.push(service);

    console.log('detail', [this.Price, this.Service]);
  }
}
