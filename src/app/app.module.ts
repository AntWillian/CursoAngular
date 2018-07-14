import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FotoModule
  ],
  providers: [],

  /** Componente que inicia a aplicação */
  bootstrap: [AppComponent]
})
export class AppModule { }
