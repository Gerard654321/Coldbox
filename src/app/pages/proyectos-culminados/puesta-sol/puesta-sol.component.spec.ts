import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestaSolComponent } from './puesta-sol.component';

describe('PuestaSolComponent', () => {
  let component: PuestaSolComponent;
  let fixture: ComponentFixture<PuestaSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuestaSolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuestaSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
