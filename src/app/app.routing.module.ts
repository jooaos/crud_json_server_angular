import { EditarComponent } from './editar/editar.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'extrato',
    pathMatch: 'full'
  },
  {
    path: 'extrato',
    component: ExtratoComponent
  },
  {
    path: 'nova-transferencia',
    component: NovaTransferenciaComponent
  },
  {
    path: 'editar-transferencia/:id',
    component: EditarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
}
)

export class AppRoutingModule {

}
