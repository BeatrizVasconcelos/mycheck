import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarClientesComponent } from './cadastrar-clientes/cadastrar-clientes.component';
import { CadastrarVisitasComponent } from './cadastrar-visitas/cadastrar-visitas.component';
import { HomeComponent } from './home/home.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ListarVisitasComponent } from './listar-visitas/listar-visitas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes/cadastrar', component: CadastrarClientesComponent },
  { path: 'clientes/listar', component: ListarClientesComponent},
  { path: 'visitas/cadastrar', component: CadastrarVisitasComponent },
  { path: 'visitas/listar', component: ListarVisitasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
