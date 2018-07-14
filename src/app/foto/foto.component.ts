import { Component, Input } from "@angular/core";

@Component({
    selector:'foto',
    //templateUrl:'./foto.component.html'

    /* Aqui é colocado o html */
    template:'<img [src]="url" [alt]="titulo">',
   /* Aqui é colocado o css */
    styles:[]
})


export class FotoComponent{

    @Input() url='';
    @Input() titulo='';

}