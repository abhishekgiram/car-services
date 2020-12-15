import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {ServicesComponent} from './services/services.component';
import {CarSizeComponent} from './car-size/car-size.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [ 
    
  ],
  imports: [
    RouterModule.forRoot([
        { path: 'Services', component: ServicesComponent },
        {path:'car-size', component:CarSizeComponent}
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


