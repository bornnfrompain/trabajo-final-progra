import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private platform: Platform,
    public router: Router,
  ) {
    this.iniciarApp();
  }
  
  //Inicia la app con el splash
  iniciarApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('splash');
    });
  }

  async ngOnInit() {
  }
}

