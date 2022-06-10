import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {


  /*Elementos que constituem a operação*/
  valo1: number = 0;
  valo2: number = 0;
  resultado: number = 0;



  constructor() { }

  ngOnInit(): void {
  }

}
