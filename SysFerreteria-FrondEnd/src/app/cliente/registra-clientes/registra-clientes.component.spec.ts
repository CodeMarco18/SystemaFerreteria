import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraClientesComponent } from './registra-clientes.component';

describe('RegistraClientesComponent', () => {
  let component: RegistraClientesComponent;
  let fixture: ComponentFixture<RegistraClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
