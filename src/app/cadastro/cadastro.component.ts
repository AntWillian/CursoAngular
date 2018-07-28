import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../service/foto.service';
import {ActivatedRoute, Router} from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new Foto();
  mensagem = {
    conteudo : '',
    tipo:''
  }

  formCadastro: FormGroup


  constructor(private servico:FotoService,
              private rotaAtiva: ActivatedRoute,
              private roteador: Router,
            private formBuider: FormBuilder) { }


  ngOnInit() {

    this.formCadastro = this.formBuider.group({
      titulo: ['',Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      url:  ['',Validators.required],
      descricao:''
    })

    console.log(this.rotaAtiva.snapshot.params.fotoId);

    const fotoId = this.rotaAtiva.snapshot.params.fotoId;

    if(fotoId){
      this.servico.buscar(fotoId).subscribe(
        fotoApi => {
          this.foto=fotoApi

          this.formCadastro.patchValue(this.foto)
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

    this.foto = {...this.foto,...this.formCadastro.value};

    if(this.foto._id){
      this.servico.atualizar(this.foto).subscribe(
        () => this.roteador.navigate([''])
      )
    }else{
      this.servico.cadastrar(this.foto).subscribe(

        () =>{}
        ,
        (erro) => console.log(erro)
        ,

        ()=>{
          this.mensagem.conteudo =`${this.foto.titulo} cadastrado com sucesso`
          this.mensagem.tipo = 'success'
            setTimeout(() => {
              this.formCadastro.reset()
              this.mensagem.conteudo = ''
              //this.foto = new Foto()
              
            }, 2000);
          }
      )
    }
    
}

  

}
