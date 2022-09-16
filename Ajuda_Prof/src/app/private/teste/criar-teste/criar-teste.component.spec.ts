import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTesteComponent } from './criar-teste.component';

describe('CriarTesteComponent', () => {
  let component: CriarTesteComponent;
  let fixture: ComponentFixture<CriarTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
