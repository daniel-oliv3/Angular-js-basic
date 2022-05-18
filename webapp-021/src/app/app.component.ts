import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  //...

  apresentar: boolean = false;

  btn_Click(){
    if(this.apresentar){
      this.apresentar = false;
    }else{
      this.apresentar = true;
    }
  }


  }










