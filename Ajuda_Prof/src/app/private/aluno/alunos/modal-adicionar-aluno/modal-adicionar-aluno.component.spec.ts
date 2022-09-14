import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarAlunoComponent } from './modal-adicionar-aluno.component';

describe('ModalAdicionarAlunoComponent', () => {
  let component: ModalAdicionarAlunoComponent;
  let fixture: ComponentFixture<ModalAdicionarAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdicionarAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdicionarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
