import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

import {HttpClientModule} from '@angular/common/http';
import { ApiHttpService } from './services/api-http.service';
import { ApiEndpointsService } from './services/api-endpoints.service';
import { TurmaComponent } from './private/turma/turma.component';
import { Constants } from './config/constants';
import { AdicionarTurmaComponent } from './private/turma/adicionar-turma/adicionar-turma.component';
import { PrivateComponent } from './private/private/private.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TurmaComponent,
    AdicionarTurmaComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    ApiEndpointsService,
    ApiHttpService,
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
