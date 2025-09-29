import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosProyectosComponent } from './nuestros-proyectos.component';

describe('NuestrosProyectosComponent', () => {
  let component: NuestrosProyectosComponent;
  let fixture: ComponentFixture<NuestrosProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrosProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrosProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
