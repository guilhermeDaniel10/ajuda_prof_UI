import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliacaoComponent } from './private/avaliacao/avaliacao.component';
import { TabelaAvaliacaoComponent } from './private/avaliacao/tabela-avaliacao/tabela-avaliacao.component';
import { TabelaParaExcelComponent } from './private/avaliacao/tabela-avaliacao/tabela-para-excel/tabela-para-excel.component';
import { TurmaSelecionadaComponent } from './private/turma/turma-selecionada/turma-selecionada.component';
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
    path: 'turmas',
    component: TurmaComponent,
    children: [{
      path: 'selecionada',
      component: TurmaSelecionadaComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
