import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendaListaComponent } from './agenda-lista/agenda-lista.component';
import { AgendaFormComponent } from './agenda-form/agenda-form.component';
const routes: Routes = [
  { path: '', component: AgendaListaComponent, children: [
    { path: 'novo', component: AgendaFormComponent},
    { path: 'editar/:id', component: AgendaFormComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
