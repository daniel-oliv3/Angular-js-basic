import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  //valor: string = 'Sapup3';


  info: string = 'Tudo calmo.';

  Escuta(){
    this.info = 'Nome alterado...';
  }



  }










