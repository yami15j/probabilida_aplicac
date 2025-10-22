import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutacionesComponent } from './permutaciones.component';

describe('PermutacionesComponent', () => {
  let component: PermutacionesComponent;
  let fixture: ComponentFixture<PermutacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermutacionesComponent]
    });
    fixture = TestBed.createComponent(PermutacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
