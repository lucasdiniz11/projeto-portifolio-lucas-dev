import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Transferencia } from './../models/transferencia.model';
import { TransferenciasService } from './../shered/services/transferencias.service';


@Injectable ({
  providedIn: 'root'
})

export class ExtratoResolve implements Resolve<Transferencia[]> {

  constructor(private service: TransferenciasService){}

  transferencias: Transferencia[] = [];

  resolve(
    state: ActivatedRouteSnapshot,
    route: RouterStateSnapshot
  ):Observable<Transferencia[]> {
    console.log('> Resolve');
    return this.service.todasTransferencias()
    .pipe(
       delay(1000)
    )}
}
