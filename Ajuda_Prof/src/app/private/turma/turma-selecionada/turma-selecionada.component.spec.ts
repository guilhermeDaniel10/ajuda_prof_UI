import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaSelecionadaComponent } from './turma-selecionada.component';

describe('TurmaSelecionadaComponent', () => {
  let component: TurmaSelecionadaComponent;
  let fixture: ComponentFixture<TurmaSelecionadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaSelecionadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaSelecionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
