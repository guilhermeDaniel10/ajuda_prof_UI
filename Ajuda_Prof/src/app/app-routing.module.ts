import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaAvaliacaoComponent } from './private/aluno/tabela-avaliacao/tabela-avaliacao.component';

const routes: Routes = [
  {
    path: 'avaliacao',
    component: TabelaAvaliacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
