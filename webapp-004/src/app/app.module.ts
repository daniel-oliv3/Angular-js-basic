import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocioComponent } from './socio/socio.component';
import { ClubeComponent } from './clube/clube.component';

@NgModule({
  declarations: [
    AppComponent,
    SocioComponent,
    ClubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
