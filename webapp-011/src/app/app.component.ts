import { Component } from '@angular/core';

@Component({
  //selector: 'app-root', -> Cria um elemento novo no HTML
  //selector: '[app-root]', -> Cria um novo no atributo para adicionar ao HTML
  //selector: '.app-root', -> Cria um componente que funciona como uma classe
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp-011';
}
