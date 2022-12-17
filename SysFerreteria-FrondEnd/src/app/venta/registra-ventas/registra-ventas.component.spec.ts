import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraVentasComponent } from './registra-ventas.component';

describe('RegistraVentasComponent', () => {
  let component: RegistraVentasComponent;
  let fixture: ComponentFixture<RegistraVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
