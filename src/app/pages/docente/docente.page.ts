import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DocentePage implements OnInit {

  codigo : any;
  usuario : any;
  contrasena : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route : Router
  ) { 
    this.activatedRoute.queryParams.subscribe(params=>{
      if(this.route.getCurrentNavigation().extras.state){
        this.codigo = this.route.getCurrentNavigation().extras.state.cod;
        this.usuario = this.route.getCurrentNavigation().extras.state.user;
        this.contrasena = this.route.getCurrentNavigation().extras.state.pwd;
      }
    })
  }

  ngOnInit() {
  }

}

