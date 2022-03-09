import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { ExtratoResolve } from './extrato/extrato.resolve';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

const routes: Routes = [
  { path: 'app-extrato', component: ExtratoComponent,
    resolve: { extrato: ExtratoResolve }
  },
  { path: 'app-nova-transferencia', component: NovaTransferenciaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BytebankRoutingModule { }
