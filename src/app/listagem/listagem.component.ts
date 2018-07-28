import { Component, OnInit } from '@angular/core';
import { FotoService } from '../service/foto.service'
import { Foto } from '../foto/foto';

@Component({
  
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})



export class ListagemComponent implements OnInit {

  listaFotos:Foto[] = [];

  constructor(private servico:FotoService){
   
  }

  ngOnInit() {

    this.servico.listar().subscribe(

      fotosApi=> this.listaFotos=fotosApi
      
    )
  }

  deletar(fotoApagada){
    this.servico.deletar(fotoApagada._id)
                    .subscribe(
                      () => {
                        this.listaFotos = Array.from(this.listaFotos)
                        .filter((fotoLoop)=>{if(fotoLoop != fotoApagada){
                          return fotoLoop
                        }})
                      }
                    )
  }

}
