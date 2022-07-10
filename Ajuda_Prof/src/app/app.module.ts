import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiHttpService } from './services/api-http.service';
import { ApiEndpointsService } from './services/api-endpoints.service';
import { TurmaComponent } from './private/turma/turma.component';
import { Constants } from './config/constants';
import { AdicionarTurmaComponent } from './private/turma/adicionar-turma/adicionar-turma.component';
import { PrivateComponent } from './private/private/private.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionarTurmaComponent } from './private/turma/modal-adicionar-turma/modal-adicionar-turma.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabelaAlunosComponent } from './private/aluno/tabela-alunos/tabela-alunos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TurmaComponent,
    AdicionarTurmaComponent,
    PrivateComponent,
    ModalAdicionarTurmaComponent,
    TabelaAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule
    

  ],
  providers: [
    ApiEndpointsService,
    ApiHttpService,
    Constants,
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
