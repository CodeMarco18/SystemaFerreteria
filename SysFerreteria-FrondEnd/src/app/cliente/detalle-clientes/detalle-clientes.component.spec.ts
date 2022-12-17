import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleClientesComponent } from './detalle-clientes.component';

describe('DetalleClientesComponent', () => {
  let component: DetalleClientesComponent;
  let fixture: ComponentFixture<DetalleClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
