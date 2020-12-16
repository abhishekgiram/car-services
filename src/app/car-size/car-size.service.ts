import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarSizeService {
  public price:any;

  constructor() { }
  setPrice(val){
    this.price = val;
  }
  getPrice(){
    return this.price;
  }
}
