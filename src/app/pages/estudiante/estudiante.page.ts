import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination } from 'swiper/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ConsumoAPIService } from 'src/app/services/consumo-api.service';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EstudiantePage implements AfterContentChecked {

  //Páginas
  @ViewChild('swiper') swiper: SwiperComponent;
  pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  state = true; // deshabilita las casillas
  mostrar1 = true; // muestra el boton guardar

  code : any;
  usuario : any;
  contrasena : any;

  tituloAPI : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route : Router,
    private camera: Camera,
    private consumoApi: ConsumoAPIService
  ) { 
    this.activatedRoute.queryParams.subscribe(params=>{
      if(this.route.getCurrentNavigation().extras.state){
        this.code = this.route.getCurrentNavigation().extras.state.cod;
        this.usuario = this.route.getCurrentNavigation().extras.state.user;
        this.contrasena = this.route.getCurrentNavigation().extras.state.pwd;
      }
    })
  }

  ngAfterContentChecked() {
    if(this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  //Abrir Cámara
  tomarFoto() {
    const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((ImageData) => {
        //Do something with the new photo

    }, (err) => {
        //Handle error
        console.log("Camera issue: " + err)
    })
  }

  //API
  mostrar(){
    this.consumoApi.getPost().subscribe((res)=>{
      this.tituloAPI =''+ res[0].title;
      console.log(res[0].title +"++++" + this.tituloAPI);
    }, (error)=>{
      console.log(error);
    });
  }

  actualizar(){
    var post= {
      'userId': 1,
      'title': '¡Bienvenido a RegistrAPP!, esta es una aplicación para controlar la asistencia a clases.',
      'body': '.'
    }
    this.consumoApi.updatePost(1,post).subscribe((success)=>{
      this.tituloAPI = '' + success.title;
      console.log(success.title);
    },error=>{
      console.log(error);
    })
  }

}