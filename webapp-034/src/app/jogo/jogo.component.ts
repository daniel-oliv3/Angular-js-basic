import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {


  /*Elementos que constituem a operação*/
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;


  str_operacao: string = '';
  valor_inserido: number = 0;

  /* */
  constructor() {
    this.CriaNovaOperacao();
  }

  /* Metodos */
  CriaNovaOperacao(){
    //cria aleatoriamente uma adição
    this.valor1 = Math.floor(Math.random()*10);
    this.valor2 = Math.floor(Math.random()*10);
    this.resultado = this.valor1 + this.valor2;
    this.str_operacao = this.valor1 + ' + ' + this.valor2 + " = ";
  }







  ngOnInit(): void {
  }

}
