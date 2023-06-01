import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ServicesComponent} from './services/services.component'
import {HttpClientModule} from '@angular/common/http';
//in place where you wanted to use `HttpClient`
//import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,ServicesComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule,RouterModule,HttpClientModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
