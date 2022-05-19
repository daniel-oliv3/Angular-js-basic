/* Loja */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent {

  produtos = [];


  AdcAbacaxi(){
    //Adiciona um abacaxi ao componente
    this.produtos.push({
      'icon': 'ico_abacaxi.png',
      'nome': 'Abacaxi'
    });
  }

  AdcBanana(){
    //Adiciona uma banana ao componente
    this.produtos.push({
      'icon': 'ico_banana.png',
      'nome': 'Banana'
    });
  }

  AdcLaranja(){
    //Adiciona uma laranja ao componente
    this.produtos.push({
      'icon': 'ico_laranja.png',
      'nome': 'Laranja'
    });
  }

}
