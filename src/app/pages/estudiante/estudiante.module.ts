import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EstudiantePageRoutingModule } from './estudiante-routing.module';
import { EstudiantePage } from './estudiante.page';
import { SwiperModule } from 'swiper/angular';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudiantePageRoutingModule,
    SwiperModule,
  ],
  declarations: [EstudiantePage],
  providers: [Camera]
})
export class EstudiantePageModule {}
