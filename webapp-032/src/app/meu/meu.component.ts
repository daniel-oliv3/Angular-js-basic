import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-meu',
  templateUrl: './meu.component.html',
  styleUrls: ['./meu.component.css']
})
export class MeuComponent {

  nome: string = "Sapup3";

  @Output() evento = new EventEmitter<string>();



  AnterarNome(){
    this.nome = "Daniel Oliveira";
    this.evento.emit(this.nome);
  }



}
