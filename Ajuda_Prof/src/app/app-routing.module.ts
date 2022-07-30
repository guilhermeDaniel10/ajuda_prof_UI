import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliacaoComponent } from './private/avaliacao/avaliacao.component';
import { TabelaAvaliacaoComponent } from './private/avaliacao/tabela-avaliacao/tabela-avaliacao.component';
import { TabelaParaExcelComponent } from './private/avaliacao/tabela-avaliacao/tabela-para-excel/tabela-para-excel.component';
import { TurmaComponent } from './private/turma/turma.component';

const routes: Routes = [
  {
    path: 'avaliacao',
    component: AvaliacaoComponent,
    children: [
      {
        path: 'tabela-avaliacao',
        component: TabelaAvaliacaoComponent,
        children: [
          {
            path: 'tabela-excel',
            component: TabelaParaExcelComponent
          }
        ]
      }
    ]
  },
  {
    path: 'turma',
    component: TurmaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
