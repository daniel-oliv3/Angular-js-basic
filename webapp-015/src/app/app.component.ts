import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto: string = 'Texto inicial';

  inativo: boolean = false;

  //função para alterar o texto
  onClick(){
    this.texto = 'Novo texto depois do click.';
    this.inativo = true;
  }
}
