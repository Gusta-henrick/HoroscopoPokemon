import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'resultado', component: ResultadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
