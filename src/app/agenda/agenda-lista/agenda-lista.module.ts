import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoCriadoComponent } from '../contato-criado/contato-criado.component';
import { AgendaListaComponent } from './agenda-lista.component';
import { AgendaRoutingModule } from '../agenda-routing.module';






@NgModule({
  declarations: [
    AgendaListaComponent,
    ContatoCriadoComponent,
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule
  ],
  exports: [AgendaListaComponent]
})
export class AgendaListaModule { }
