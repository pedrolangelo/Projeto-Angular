import { Component, OnInit, ViewChild } from '@angular/core';
import { Agenda } from '../agenda';
import { AgendaService } from '../agenda.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agenda-lista',
  templateUrl: './agenda-lista.component.html',
  styleUrls: ['./agenda-lista.component.scss'],
})
export class AgendaListaComponent implements OnInit {

  @ViewChild('deleteModal') deleteModal: any;

  agenda$: Observable<Agenda[]>;
  deleteModalRef: BsModalRef;
  contatoSelecionado: Agenda;
  contato: any;

  constructor(
    private service: AgendaService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.agenda$ = this.service.listar();

    this.service.emitirCursoCriado.subscribe(
      nomeContato => console.log(nomeContato)
    );


  }
  onEdit(id: any) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }
  onRemover(id: any) {
    this.contatoSelecionado =id;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onConfirmDelete(){
    this.service.deletar(this.contatoSelecionado).subscribe(
      success => window.location.reload(),
      error => console.log(error)
    );

  }

  onDeclineDelete(){
    this.deleteModalRef.hide();
  }
}
