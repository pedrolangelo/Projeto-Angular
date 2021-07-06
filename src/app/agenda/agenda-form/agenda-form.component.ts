import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgendaService } from './../agenda.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styleUrls: ['./agenda-form.component.scss'],
})
export class AgendaFormComponent implements OnInit {
  formulario: FormGroup;
  flag = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: AgendaService,
    private location: Location,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.service.buscarId(id))
    )
    .subscribe(contato => this.atualizarForm(contato));

    this.formulario = this.formBuilder.group({
      id:[null],
      nome: [null, Validators.required],
      telefone: [null, Validators.required]
    });
  }

  atualizarForm(contato: any){
    this.formulario.patchValue({
      id: contato.id,
      nome: contato.nome,
      telefone: contato.telefone
    })
  }

  onSubmit() {
    this.flag = true;
    console.log(this.formulario.value);

    if(this.formulario.valid){

      this.service.save(this.formulario.value).subscribe(
        success =>{
          console.log('sucesso');
          window.location.reload();
        },
        (error) => console.log(error)
      );
    }
  }

}
