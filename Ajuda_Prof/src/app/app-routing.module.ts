import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './private/aluno/alunos/alunos.component';
import { AvaliacaoComponent } from './private/avaliacao/avaliacao.component';
import { TabelaAvaliacaoComponent } from './private/avaliacao/tabela-avaliacao/tabela-avaliacao.component';
import { TabelaParaExcelComponent } from './private/avaliacao/tabela-avaliacao/tabela-para-excel/tabela-para-excel.component';
import { PaginaInicialComponent } from './private/pagina-inicial/pagina-inicial.component';
import { CriarTesteComponent } from './private/teste/criar-teste/criar-teste.component';
import { TurmaSelecionadaComponent } from './private/turma/turma-selecionada/turma-selecionada.component';
import { TurmaComponent } from './private/turma/turma.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pagina-inicial',
  },
  {
    path: 'pagina-inicial',
    component: PaginaInicialComponent,
  },
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
            component: TabelaParaExcelComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'turmas',
    component: TurmaComponent,
    children: [
      {
        path: 'selecionada',
        component: TurmaSelecionadaComponent,
      },
    ],
  },
  {
    path: 'turmas/alunos',
    component: AlunosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
