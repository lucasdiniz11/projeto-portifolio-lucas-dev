import { Transferencia } from '../models/transferencia.model';

import { Component, Output, EventEmitter } from '@angular/core';
import { TransferenciasService } from '../shered/services/transferencias.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.less']
})


export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciasService){}

  valor: number = 0;
  destino: number = 0;

  transferir() {
    const emitirValor: any = { valor: this.valor, destino: this.destino };
    this.service.adicionar(emitirValor).subscribe(
      (observer: Transferencia) => {
        console.log('> Nova Transferencia: ' + observer);
        this.inicializarCampos();
      (error: any) => {
        console.error(error);
      }
    })
    //this.aoTransferir.emit(emitirValor);
    //console.log(emitirValor);
    //this.inicializarCampos();
  }

  inicializarCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
