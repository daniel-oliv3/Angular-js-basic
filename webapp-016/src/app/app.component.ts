import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //...
  valor: string = 'Texto inicial';

  btn_Click(event: any){
    this.valor = 'Novo texto...';

    console.log(event);
  }

  teclaPressionada(event: any){
    //console.log(event);
    this.valor = event.target.value;
  }
}
