import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";

@NgModule ({
    declarations: /** Componente */ [CardComponent],
    exports: /** Deixa a class publica*/  [CardComponent]
})

export class CardModule {}