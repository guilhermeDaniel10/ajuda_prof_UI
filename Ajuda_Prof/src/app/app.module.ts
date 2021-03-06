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
import { MatSortModule } from '@angular/material/sort';
import { TabelaComponent } from './shared/tabela/tabela.component';
import { TabelaAvaliacaoComponent } from './private/avaliacao/tabela-avaliacao/tabela-avaliacao.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { AvaliacaoComponent } from './private/avaliacao/avaliacao.component';
import { TabelaParaExcelComponent } from './private/avaliacao/tabela-avaliacao/tabela-para-excel/tabela-para-excel.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FooterComponent } from './shared/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { ModalComponent } from './shared/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TurmaComponent,
    AdicionarTurmaComponent,
    PrivateComponent,
    ModalAdicionarTurmaComponent,
    TabelaAlunosComponent,
    TabelaComponent,
    TabelaAvaliacaoComponent,
    SidebarComponent,
    AvaliacaoComponent,
    TabelaParaExcelComponent,
    FooterComponent,
    ModalComponent,
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
    MatTableModule,
    MatSortModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatCardModule
    
  ],
  providers: [ApiEndpointsService, ApiHttpService, Constants, NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
