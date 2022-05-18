import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  //...
  cor: string = 'green';
  corTexto: string = 'green';

  alterarCor(){
    this.cor = 'blue';
  }


  alterarCorTexto(){
    this.corTexto = 'red';
  }



  }










