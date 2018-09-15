import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  btnIniciarSesion:string;
  btnInicio:string;
  btnHoteles:string;
  btnQuienesSomos:string;
  btnContacto:string;

  constructor() {
    this.btnIniciarSesion = "Iniciar Sesión";
    this.btnInicio = "Inicio";
    this.btnHoteles = "Tipos de Hoteles";
    this.btnQuienesSomos = "¿Quiénes Sómos?";
    this.btnContacto = "Contacto";
    
    this.btnCategorias =[
      'Una Estrella';
      'Dos Estrellas';
      'Tres Estrellas';
      'Cuatro Estrellas';
      'Cinco Estrellas';
      
      ]
  }

  ngOnInit() {
  }

}
