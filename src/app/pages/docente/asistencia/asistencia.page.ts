import { Component, OnDestroy, ViewChild } from '@angular/core';
import { DatosClasesService, DatosClases } from 'src/app/services/datosclases.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage {//implements OnDestroy 
  muestrame = false;
  clases : DatosClases[] = [];
  newClase: DatosClases = <DatosClases>{};
  @ViewChild('myList')myList :IonList; 

  qrCodeString = '¡Asistencia registrada exitosamente!';

  constructor( 
    private serviceClases: DatosClasesService, 
    private plt: Platform, 
    private toastController: ToastController,
    public alertController: AlertController) {
      this.plt.ready().then(()=>{ 
        this.loadClases();
      }) }


  //Invocamos al método getClases() del Service
  loadClases(){
    this.serviceClases.getClases().then(clases=>{ 
      this.clases = clases;
    })
  }

  //Creamos un objeto del tipo interface DatosClases, invocamos al método del service loadClases();
  addClases(){
    this.newClase.modified=Date.now();
    this.newClase.id=Date.now();
    this.serviceClases.addClases(this.newClase).then(clase => { 
      this.newClase = <DatosClases>{};
      this.showToast('¡Clase Generada!');
      this.loadClases();
    })
  }

  async showToast(msg){
    const toast = await this.toastController.create({ 
      message : msg,
      duration: 2000
    })
    toast.present();
  }

   //Update
   updateClases(clase: DatosClases) {
    clase.id = `UPDATED: ${clase.id}`;
    clase.modified = Date.now();
    this.serviceClases.updateClases(clase).then(item=>{
      this.showToast('Clase Actualizada!')
      this.myList.closeSlidingItems();
      this.loadClases();
    });
  } 

  //Delete
  deleteClases(clase: DatosClases){
    this.serviceClases.deleteClases(clase.id).then(item=>{
      this.showToast('Clase Eliminada');
      this.myList.closeSlidingItems();
      this.loadClases();
    });
  }

  //Mostrar Código QR
  mostrar() {
    this.muestrame = true;
  }

}