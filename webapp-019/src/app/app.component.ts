import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  apresentar: boolean = false;
  texto_botao: string = 'Apresentar';

  //Adiciona ou remove o paragrafo.
  btn_Click(){
    if(this.apresentar){
      this.apresentar = false;
      this.texto_botao = 'Apresentar';
    }else {
        this.apresentar = true;
        this.texto_botao = 'Remover';
      }
    }
  }





