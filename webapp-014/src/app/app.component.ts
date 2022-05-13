import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'webapp-014';
  inativo: boolean = true;
  texto: string = 'Texto do placholder';

  constructor(){
    this.colocarAtivo();
  }

  colocarAtivo(){
    setTimeout(() => {
      this.inativo = false;
      this.texto = "Texto alterado!";
    }, 5000);
  }
}
