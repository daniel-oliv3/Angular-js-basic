import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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


/* Event emitter para informar o app.component */
@Output() resposta_final = new EventEmitter;



/* ************************************************************ */
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



/* *************************************************************** */
  DefinirResultado(Evento: any){
    //atualiza o valor inserido dentro do input
    this.valor_inserido = Evento.valor.target.value;


  }


/* *************************************************************** */
AvaliarResultadoInserido(){
  //avalia se a operação foi solucionada ou não
  if(this.valor_inserido == this.resultado){
    this.resposta_final.emit(true);
  }else{
    this.resposta_final.emit(false);
  }
}


  ngOnInit(): void {
  }

}
