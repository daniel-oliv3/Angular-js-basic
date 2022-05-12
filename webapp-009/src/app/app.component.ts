import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .cor {
        color: green;
      }

      .cor2 {
        color: lightgray;
      }

    `
  ]
})
export class AppComponent {
  title = 'webapp-009';
}
