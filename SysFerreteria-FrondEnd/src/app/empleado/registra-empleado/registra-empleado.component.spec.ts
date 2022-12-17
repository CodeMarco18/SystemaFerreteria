import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraEmpleadoComponent } from './registra-empleado.component';

describe('RegistraEmpleadoComponent', () => {
  let component: RegistraEmpleadoComponent;
  let fixture: ComponentFixture<RegistraEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
