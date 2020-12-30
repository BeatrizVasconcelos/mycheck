import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarVisitasComponent } from './cadastrar-visitas.component';

describe('CadastrarVisitasComponent', () => {
  let component: CadastrarVisitasComponent;
  let fixture: ComponentFixture<CadastrarVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarVisitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
