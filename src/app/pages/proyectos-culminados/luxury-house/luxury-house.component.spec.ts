import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryHouseComponent } from './luxury-house.component';

describe('LuxuryHouseComponent', () => {
  let component: LuxuryHouseComponent;
  let fixture: ComponentFixture<LuxuryHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxuryHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxuryHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
