import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosComponent } from './socios.component';

describe('SociosComponent', () => {
  let component: SociosComponent;
  let fixture: ComponentFixture<SociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SociosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
