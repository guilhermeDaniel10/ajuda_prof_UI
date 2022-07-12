import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAvaliacaoComponent } from './tabela-avaliacao.component';

describe('TabelaAvaliacaoComponent', () => {
  let component: TabelaAvaliacaoComponent;
  let fixture: ComponentFixture<TabelaAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
