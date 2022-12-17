import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraProductoComponent } from './registra-producto.component';

describe('RegistraProductoComponent', () => {
  let component: RegistraProductoComponent;
  let fixture: ComponentFixture<RegistraProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
