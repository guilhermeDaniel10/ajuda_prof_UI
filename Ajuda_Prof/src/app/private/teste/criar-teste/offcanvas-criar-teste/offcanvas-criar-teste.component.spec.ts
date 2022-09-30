import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasCriarTesteComponent } from './offcanvas-criar-teste.component';

describe('OffcanvasCriarTesteComponent', () => {
  let component: OffcanvasCriarTesteComponent;
  let fixture: ComponentFixture<OffcanvasCriarTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcanvasCriarTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffcanvasCriarTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
