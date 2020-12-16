import { Component, OnInit } from '@angular/core';
import {ServicesService } from '../services/services.service';
import { Router } from '@angular/router';
import { CarSizeService} from './car-size.service';
@Component({
  selector: 'app-car-size',
  templateUrl: './car-size.component.html',
  styleUrls: ['./car-size.component.scss']
})
export class CarSizeComponent implements OnInit {
  public data: any;
  public sum : any = 0;
  public total:any;
  constructor(public serviceservice : ServicesService,
    public router:Router ,
    public carsizeService :CarSizeService,) { }

  ngOnInit(): void {
    this.data=this.serviceservice.getArrData();
    console.log('data colleceted',this.data);
    for(let i=0; i<this.data.length; i++)
    {
      if(i%2===1)
      {
      this.sum=this.sum+this.data[i];
      }
    }
  }

  detail=(service,price)=>{
    this.total=price+this.sum;

    console.log('total price',this.total);    
    console.log('services',this.data);
    this.carsizeService.setPrice(this.total);

  }
  btnClick= function () {
    this.router.navigate(['/price']);
};

}
