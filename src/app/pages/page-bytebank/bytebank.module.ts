import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BytebankRoutingModule } from './bytebank-routing.module';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';


@NgModule({
  declarations: [
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    CommonModule,
    BytebankRoutingModule
  ],
  providers: []
})
export class BytebankModule { }
