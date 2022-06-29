import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPlatosComponent } from './buscar-platos.component';

describe('BuscarPlatosComponent', () => {
  let component: BuscarPlatosComponent;
  let fixture: ComponentFixture<BuscarPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPlatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
