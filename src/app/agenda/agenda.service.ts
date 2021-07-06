import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agenda } from './agenda';
import { take, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  emitirCursoCriado = new EventEmitter();


  private readonly API = `${environment.API}agenda`;

  constructor(private http: HttpClient) { }

  listar (){
    return this.http.get<Agenda[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }


  private criar (contato: any){
    this.emitirCursoCriado.emit(contato)
    return this.http.post(this.API, contato).pipe(take(1));
  }

  private atualizar(contato: any){
    return this.http.put(`${this.API}/${contato.id}`, contato).pipe(take(1))
  }

  deletar(id: any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

  buscarId(id: any){
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  save(contato: any){
    if(contato.id){
      return this.atualizar(contato);
    }
    return this.criar(contato);
  }
}
