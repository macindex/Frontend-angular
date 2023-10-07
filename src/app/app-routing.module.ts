import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoCrudComponent } from './views/contato-crud/contato-crud.component';
import { HomeComponent } from './views/home/home.component';
import { ContatoCreateComponent } from './components/contato/contato-create/contato-create.component';
import { ContatoUpdateComponent } from './components/contato/contato-update/contato-update.component';
import { ContatoDeleteComponent } from './components/contato/contato-delete/contato-delete.component';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contatos",
    component: ContatoCrudComponent
  },
  {
    path: "contatos/create",
    component: ContatoCreateComponent
  },
  {
    path: "contatos/update/:id",
    component: ContatoUpdateComponent
  },
  {
    path: "contatos/delete/:id",
    component: ContatoDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
