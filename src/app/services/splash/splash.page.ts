import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  // Después del splash redirige al home
  constructor(public router:Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('home');
    }, 2000);
   }

  ngOnInit() {
  }

}
