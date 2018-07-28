import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Foto } from "../foto/foto";

@Injectable({providedIn:'root'})

export class FotoService {

    url = 'http://localhost:3000/v1/fotos/';

    constructor(private conexaoApi:HttpClient){

    }

    listar(){
        return this.conexaoApi.get(this.url)
    }

    cadastrar(foto: Foto){
        return this.conexaoApi.post(this.url,foto)
    }

    deletar(id){
        return this.conexaoApi.delete(this.url+id)
    }

    buscar(){}

    atualizar(){}


}