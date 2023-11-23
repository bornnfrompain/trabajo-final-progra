import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formularioSignup: FormGroup;

  constructor(
    public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    //Formulario de Ingreso
    this.formularioSignup = this.fb.group({
      'cod': new FormControl("", Validators.required),
      'user': new FormControl("", Validators.required),
      'pwd': new FormControl("", Validators.required),
      'pwd2': new FormControl("", Validators.required),
    })
   }

  ngOnInit() {
  }

  //Guardar usuario nuevo
  async guardar(){

    var f = this.formularioSignup.value;

    if(this.formularioSignup.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debes llenar todos los campos.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;

    }else{
      const alert = await this.alertController.create({
        header: '¡Perfecto!',
        message: 'Usuario registrado exitosamente.',
        buttons: ['Aceptar']
      });

      await alert.present();
      this.navCtrl.navigateRoot('home');

    }

    var usuario = {
      cod: f.cod,
      user: f.user,
      pwd: f.pwd,
      pwd2: f.pwd2,
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  
}