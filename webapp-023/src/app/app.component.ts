import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  estado: boolean = true;

  //...
  alterarEstilo(){
    return {
      //'background-color': 'blue',
      //'color': 'white'

      backgroundColor: 'blue',
      color: 'white'
    };
  }


  Alternar(){
    if(this.estado){
      this.estado = false;
    }else{
      this.estado = true;
    }
  }

  }










