import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinacionesComponent } from './combinaciones.component';

describe('CombinacionesComponent', () => {
  let component: CombinacionesComponent;
  let fixture: ComponentFixture<CombinacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombinacionesComponent]
    });
    fixture = TestBed.createComponent(CombinacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
