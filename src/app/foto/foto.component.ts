import { Component, Input } from "@angular/core";


/* Notacao */
@Component({
    selector:'foto',
    //templateUrl:'./foto.component.html'

    /* Aqui é colocado o html */
    template:'<img class="card-img-top" [src]="url" [alt]="titulo">',
   /* Aqui é colocado o css */
    styles:[]
})


export class FotoComponent{

    /** Decoraitor  @Input() */
    @Input() url='';
    @Input() titulo='';

}