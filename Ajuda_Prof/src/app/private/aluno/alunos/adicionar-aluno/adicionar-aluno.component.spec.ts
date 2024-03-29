import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAlunoComponent } from './adicionar-aluno.component';

describe('AdicionarAlunoComponent', () => {
  let component: AdicionarAlunoComponent;
  let fixture: ComponentFixture<AdicionarAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
