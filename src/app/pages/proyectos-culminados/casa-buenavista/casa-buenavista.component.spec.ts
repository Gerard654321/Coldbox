import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaBuenavistaComponent } from './casa-buenavista.component';

describe('CasaBuenavistaComponent', () => {
  let component: CasaBuenavistaComponent;
  let fixture: ComponentFixture<CasaBuenavistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasaBuenavistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasaBuenavistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
