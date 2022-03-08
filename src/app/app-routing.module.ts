import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NotFoundComponent } from './shered/components/not-found/not-found.component';
import { ExtratoResolve } from './extrato/extrato.resolve';


export const routes: Routes = [
  { path: '', redirectTo: 'app-login', pathMatch: 'full' },
  { path: 'app-extrato', component: ExtratoComponent,
      resolve: { extrato: ExtratoResolve }
  },
  { path: 'app-nova-transferencia', component: NovaTransferenciaComponent },
  { path: 'app-login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
