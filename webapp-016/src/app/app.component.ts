import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Texto dos comandos.
  texto_cmd1: string = 'Ativar/Inativar';
  texto_cmd2: string = 'Alterar';
  texto_cmd3: string = 'Restaurar';


  //Ativo e inativo.
  cmd2_inativo: boolean = false;
  cmd3_inativo: boolean = false;

  //Evento.
  cmd1_Click(){
    //Ativa e inativa os outrs comandos.
    if(!this.cmd2_inativo){
      this.cmd2_inativo = true;
      this.cmd3_inativo = true;
    }else {
      this.cmd2_inativo = false;
      this.cmd3_inativo = false;
    }
  }

  //Altera o texto dos botões para "...".
  cmd2_Click(){
    this.texto_cmd1 = '...';
    this.texto_cmd2 = '...';
    this.texto_cmd3 = '...';
  }


  //Colocar o texto original nos botões.
  cmd3_Click(){
    this.texto_cmd1 = 'Ativar/Inativar';
    this.texto_cmd2 = 'Alterar';
    this.texto_cmd3 = 'Restaurar';
  }

}
