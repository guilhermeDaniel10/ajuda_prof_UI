import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaParaExcelComponent } from './tabela-para-excel.component';

describe('TabelaParaExcelComponent', () => {
  let component: TabelaParaExcelComponent;
  let fixture: ComponentFixture<TabelaParaExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaParaExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaParaExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
