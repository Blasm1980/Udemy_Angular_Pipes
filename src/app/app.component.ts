import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombre: string = 'Blas Martinez ';

  constructor( private primeNGConfig: PrimeNGConfig) {

  }

  mostrarNombre() {
    console.log( this.nombre );
  }

  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }

}
