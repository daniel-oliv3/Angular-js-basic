import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //...
  valor: string = "";

//.....
/*  text_Changed(event: any){
    this.valor = event.target.value;
  }*/

//.....
  alterarTexto(){
    this.valor = 'valor alterado com o botão!';
  }





}
