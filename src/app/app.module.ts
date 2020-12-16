import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ServicesComponent} from './services/services.component'

@NgModule({
  declarations: [
    AppComponent,ServicesComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule,RouterModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
