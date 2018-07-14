import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';

/** Decoreitor */
@NgModule({

    /** Declaracao de componentes */
    declarations:[ FotoComponent ],

    /** Dar visibilidade ao publico */
    exports:[FotoComponent]
})

export class FotoModule {}