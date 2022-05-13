import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'webapp-013';
  inativo: boolean = true;

  constructor(){
    this.colocarAtivo();
  }

  colocarAtivo(){
    setTimeout(() => {
      this.inativo = false;
    }, 5000);
  }
}
