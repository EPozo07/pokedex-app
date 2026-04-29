import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generacion } from './generacion';

describe('Generacion', () => {
  let component: Generacion;
  let fixture: ComponentFixture<Generacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generacion],
    }).compileComponents();

    fixture = TestBed.createComponent(Generacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
