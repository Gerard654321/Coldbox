import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { NuestrosProyectosComponent } from './pages/nuestros-proyectos/nuestros-proyectos.component';
import { CotizarProyectoComponent } from './pages/cotizar-proyecto/cotizar-proyecto.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'nuestros-proyectos', component: NuestrosProyectosComponent },
  { path: 'cotizar-proyecto', component: CotizarProyectoComponent },
  { path: '**', redirectTo: '' }
];
