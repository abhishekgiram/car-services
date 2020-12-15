import { Component, OnInit } from '@angular/core';
import {ServicesService } from '../services/services.service';
@Component({
  selector: 'app-car-size',
  templateUrl: './car-size.component.html',
  styleUrls: ['./car-size.component.scss']
})
export class CarSizeComponent implements OnInit {
  public data: any;
  constructor(public erviceservice : ServicesService) { }

  ngOnInit(): void {
    this.data=this.erviceservice.getArrData();
    console.log('data colleceted',this.data);
  }

}
