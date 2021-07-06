import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaFormComponent } from './agenda-form/agenda-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgendaListaModule } from './agenda-lista/agenda-lista.module';




@NgModule({
  declarations: [
    AgendaFormComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AgendaListaModule,
  ]
})
export class AgendaModule { }
