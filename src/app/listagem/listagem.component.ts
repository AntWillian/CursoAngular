import { Component, OnInit } from '@angular/core';
import { FotoService } from '../service/foto.service'

@Component({
  
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  listaFotos;

  constructor(private servico:FotoService){
    this.servico.listar().subscribe(
      
      fotosApi=> this.listaFotos=fotosApi
      
    )
  }

  ngOnInit() {
  }

 /* deletar(fotoApagada){
    this.conexaoApi.delete('http://localhost:3000/v1/fotos/' + fotoApagada._id)
                    .subscribe(
                      () => {
                        this.listaFotos = Array.from(this.listaFotos)
                        .filter((fotoLoop)=>{if(fotoLoop != fotoApagada){
                          return fotoLoop
                        }})
                      }
                    )
  }*/

}
