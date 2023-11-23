import { NgModule, ViewEncapsulation, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DocentePageRoutingModule } from './docente-routing.module';
import { DocentePage } from './docente.page';

import { SwiperModule } from 'swiper/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocentePageRoutingModule,
    SwiperModule,
  ],
  declarations: [DocentePage],
  bootstrap: [DocentePage]
  
})
export class DocentePageModule {

}
