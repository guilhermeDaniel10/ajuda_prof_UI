import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasComponent } from './turma.component';

describe('TurmaComponent', () => {
  let component: TurmasComponent;
  let fixture: ComponentFixture<TurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
