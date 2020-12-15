import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {ServicesComponent} from './services/services.component'
import { from } from 'rxjs';
@NgModule({
  declarations: [ 
    
  ],
  imports: [
    RouterModule.forRoot([
        { path: 'Services', component: ServicesComponent },
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


