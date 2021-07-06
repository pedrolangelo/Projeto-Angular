import { Component, OnInit } from '@angular/core';

import { AgendaService } from './../agenda.service';

@Component({
  selector: 'app-contato-criado',
  templateUrl: './contato-criado.component.html',
  styleUrls: ['./contato-criado.component.scss']
})
export class ContatoCriadoComponent implements OnInit {


  constructor(private service: AgendaService) { }

  ngOnInit(): void {
   this.service.emitirCursoCriado.subscribe(
      nomeContato => console.log(nomeContato)
    );

  }

}
