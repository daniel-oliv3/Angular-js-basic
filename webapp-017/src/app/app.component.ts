import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //...
  texto: string = '';


  executar(event: any){
    console.log(event);
    this.texto = 'Clicou';
  }



  mouseover(event: any){
    this.texto = event.screenX;
  }


  mousemove(event: any){
    this.texto = event.screenX + '-' + event.screenY;
  }


  executar2(event: Event){
    this.texto = (<HTMLInputElement>event.target).value;
  }

}
