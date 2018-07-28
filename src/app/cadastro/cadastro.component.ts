import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../service/foto.service';
import {ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new Foto();


  constructor(private servico:FotoService,
              private rotaAtiva: ActivatedRoute,
              private roteador: Router) { }


  ngOnInit() {

    console.log(this.rotaAtiva.snapshot.params.fotoId);

    const fotoId = this.rotaAtiva.snapshot.params.fotoId;

    if(fotoId){
      this.servico.buscar(fotoId).subscribe(
        fotoApi => {
          this.foto=fotoApi
        }
      )
    }


   /* this.rotaAtiva.params.subscribe(
      parametros => {
        console.log(parametros.fotoId)
      }
    )*/
      
    }
  


  salvar(){

    if(this.foto._id){
      this.servico.atualizar(this.foto).subscribe(
        () => this.roteador.navigate([''])
      )
    }else{
      this.servico.cadastrar(this.foto).subscribe(
        (resposta) =>{console.log(resposta)},
        (erro) =>{console.log(erro)}
      )
    }
    
}

  

}
