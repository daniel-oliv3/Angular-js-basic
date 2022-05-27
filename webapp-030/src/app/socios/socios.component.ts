import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent {

  @Input('nome_novo') nome: string = 'Daniel Oliveira';
}
