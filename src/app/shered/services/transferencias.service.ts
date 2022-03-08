import { Injectable, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from 'src/app/models/transferencia.model';

@Injectable({
  providedIn: 'root'
})

export class TransferenciasService {

  private listaTransferencias: any[];
  private url: string = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  todasTransferencias(): Observable<Transferencia[]> {
    console.log('> Serviço')
    console.log('> Pergunta: ');
    console.log('           > Qual o valor que a opereção undefined!=null  retorna? R.: ');
    console.log('            ' + undefined!=null);
    console.log('           > Qual o valor que a opereção undefined!==null  retorna? R.: ');
    console.log('            ' + undefined!==null);
    console.log(typeof(undefined));
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.incrementar(transferencia);
    console.log("Post Tranferencia: " + transferencia);
    return this.httpClient.post<Transferencia>(this.url,transferencia);
  }

  //get transferencias() {
  //  return this.listaTransferencias;
  //}

  //adicionar(transferencia: any) {
  //  this.incrementar(transferencia);
  //  this.listaTransferencias.push(transferencia);
  //}

  incrementar(transferencia: any) {
    transferencia.date = new Date;
    console.log("Data: " + transferencia.date)
  }

}

function type(undefined?: undefined, nulo?:null) {
  throw new Error('Function not implemented.');
}

