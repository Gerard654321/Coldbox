import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaDobleComponent } from './casa-doble.component';

describe('CasaDobleComponent', () => {
  let component: CasaDobleComponent;
  let fixture: ComponentFixture<CasaDobleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasaDobleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasaDobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
