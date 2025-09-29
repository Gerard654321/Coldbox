import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizarProyectoComponent } from './cotizar-proyecto.component';

describe('CotizarProyectoComponent', () => {
  let component: CotizarProyectoComponent;
  let fixture: ComponentFixture<CotizarProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotizarProyectoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
