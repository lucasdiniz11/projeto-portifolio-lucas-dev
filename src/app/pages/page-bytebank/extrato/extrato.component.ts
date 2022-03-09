import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Observer } from 'rxjs';

import { Transferencia } from '../models/transferencia.model';
import { TransferenciasService } from 'src/app/shered/services/transferencias.service';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.less']
})

export class ExtratoComponent implements OnInit {

  transferir: Transferencia[] = [];
  extratoTransferencia: any = [];
  isLoading: boolean = false;

  constructor(  private service: TransferenciasService,
                private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    //this.transferir = this.service.transferencias;
    this.transferir = this.activatedRoute.snapshot.data['extrato'];
    console.log('> Componente');
    console.log('> Componente: ' + this.transferir);

//    this.service.todasTransferencias().subscribe(
//      (observer: Transferencia[]) => {
//        console.table(observer);
//        this.transferir = observer;
//        setTimeout(() => { LoadComponent.getSpinner(this.isLoading) },1000)
//        }
//    )
  }
}
