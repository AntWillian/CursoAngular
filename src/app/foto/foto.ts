 interface FotoInterface {
    titulo : string;
    url: string;
    descricao : string;
    id:string;
}

export class Foto implements FotoInterface{
    titulo = "";
    url = "";
    descricao ="";
    id="";
}