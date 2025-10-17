import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoEstabloComponent } from './proyecto-establo.component';

describe('ProyectoEstabloComponent', () => {
  let component: ProyectoEstabloComponent;
  let fixture: ComponentFixture<ProyectoEstabloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoEstabloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoEstabloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
