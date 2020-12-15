import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public dataService=[];

  constructor() { }

  setArrData(val){
    this.dataService = [...val]; //creates a new reference 
  }

  getArrData(){
   return this.dataService;
 }
}
