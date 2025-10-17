import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacaconaHouseComponent } from './macacona-house.component';

describe('MacaconaHouseComponent', () => {
  let component: MacaconaHouseComponent;
  let fixture: ComponentFixture<MacaconaHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacaconaHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacaconaHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
