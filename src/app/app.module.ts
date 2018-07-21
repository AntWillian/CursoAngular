import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './card/card.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ModuloRoteamento } from './app.routes';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    /** inporta modulos */
    BrowserModule,
    FotoModule,
    HttpClientModule,
    CardModule,
    ModuloRoteamento,
    FormsModule
  ],
  providers: [],

  /** Componente que inicia a aplicação */
  bootstrap: [AppComponent]
})



export class AppModule { }
