import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CarSizeService } from '../car-size/car-size.service';
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  public totalPrice :any;
  constructor(
    public carsizeService : CarSizeService
  ) { }

  ngOnInit(): void {
   this.totalPrice = this.carsizeService.getPrice()
  }

}
