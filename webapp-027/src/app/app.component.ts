import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp-027';

//variaveis que controlam a visibilidade dos componentes
  loja_visivel: boolean = true;
  stock_visivel: boolean = false;


//Função MostrarLoja, apresenta a loja e remove o stock
  MostrarLoja(){
    this.loja_visivel = true;
    this.stock_visivel = false;
  }

//Função MostrarStock, apresenta a stock e remove a loja
  MostrarStock(){
    this.loja_visivel = false;
    this.stock_visivel = true;
  }

}
