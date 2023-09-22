import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCardComponent } from './specific-card.component';

describe('SpecificCardComponent', () => {
  let component: SpecificCardComponent;
  let fixture: ComponentFixture<SpecificCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificCardComponent]
    });
    fixture = TestBed.createComponent(SpecificCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
