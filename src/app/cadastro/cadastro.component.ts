import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { HttpClient } from '@angular/common/http';
import { FotoService } from '../service/foto.service'


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new Foto();


  constructor(private servico:FotoService) { }


  salvar(){
    this.servico.cadastrar(this.foto).subscribe(
      (resposta) =>{console.log(resposta)},
      (erro) =>{console.log(erro)}
    )
}

  ngOnInit() {
  }

}
