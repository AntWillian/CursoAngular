import { ListagemComponent } from "./listagem/listagem.component";
import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";


const rotasApp:Routes = [

    {path:"", component:ListagemComponent},
    {path:"cadastro", component:CadastroComponent}
]

export const ModuloRoteamento = RouterModule.forRoot(rotasApp)