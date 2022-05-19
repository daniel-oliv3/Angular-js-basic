import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaComponent } from './loja.component';

describe('LojaComponent', () => {
  let component: LojaComponent;
  let fixture: ComponentFixture<LojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
