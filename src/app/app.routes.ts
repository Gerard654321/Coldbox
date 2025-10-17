import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { NuestrosProyectosComponent } from './pages/nuestros-proyectos/nuestros-proyectos.component';
import { CotizarProyectoComponent } from './pages/cotizar-proyecto/cotizar-proyecto.component';

import { CasaBuenavistaComponent } from './pages/proyectos-culminados/casa-buenavista/casa-buenavista.component'
import { LuxuryHouseComponent } from './pages/proyectos-culminados/luxury-house/luxury-house.component';
import { PuestaSolComponent } from './pages/proyectos-culminados/puesta-sol/puesta-sol.component';

import { CasaDobleComponent } from './pages/proyectos-proceso/casa-doble/casa-doble.component';
import { MacaconaHouseComponent } from './pages/proyectos-proceso/macacona-house/macacona-house.component';
import { ProyectoEstabloComponent } from './pages/proyectos-proceso/proyecto-establo/proyecto-establo.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'nuestros-proyectos', component: NuestrosProyectosComponent },
  { path: 'cotizar-proyecto', component: CotizarProyectoComponent },

  { path: 'casa-buenavista', component: CasaBuenavistaComponent },
  { path: 'luxury-house', component: LuxuryHouseComponent },
  { path: 'puesta-sol', component: PuestaSolComponent },

  { path: 'casa-doble', component: CasaDobleComponent },
  { path: 'macacona-house', component: MacaconaHouseComponent },
  { path: 'proyecto-establo', component: ProyectoEstabloComponent },

  { path: '**', redirectTo: '' }
];
