import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectStat = { label: string; value: string };
type TimelineStep = { title: string; desc: string };

@Component({
  selector: 'app-proyecto-establo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyecto-establo.component.html',
  styleUrls: ['./proyecto-establo.component.scss']
})
export class ProyectoEstabloComponent {
  project = {
    name: 'Establo Pueblo Nuevo',
    location: 'Pueblo Nuevo, Ica',
    status: 'Proyecto en proceso',
    description:
      'Este proyecto consiste en la construcción de 05 módulos habitacionales tipo flat, cada uno con baño independiente y una superficie de 80 m². Las estructuras fueron desarrolladas utilizando paneles térmicos tipo isopanel, una solución moderna que ofrece eficiencia energética, aislamiento acústico y rapidez constructiva. El proyecto se ubica en la ciudad de Ica, distrito de Pueblo Libre, en el terreno de un antiguo establo adaptado para uso habitacional, optimizando el espacio existente y aprovechando su infraestructura base. Cada módulo fue diseñado para brindar confort, funcionalidad y durabilidad, integrando ambientes amplios, ventilados y con acabados prácticos, pensados para las condiciones climáticas de la región.'
  };

  stats: ProjectStat[] = [
    { label: 'Área', value: '400 m²' },
    { label: 'Flats', value: '05' },
    { label: 'Baños', value: '05' },
    { label: 'Estructura', value: 'ISOPANEL' },
    { label: 'Entrega', value: 'Octubre 2025' }
  ];

  features = [
    'Aislamiento térmico',
    'Iluminación LED',
    'Bajo consumo',
    'Ventilación cruzada',
    'Cocina abierta',
    'Terraza social'
  ];

  timeline: TimelineStep[] = [
    { title: 'Diseño', desc: 'Anteproyecto y compatibilización' },
    { title: 'Cimentación', desc: 'Platea y anclajes' },
    { title: 'Panelería', desc: 'Montaje y sellado' },
    { title: 'Instalaciones', desc: 'Eléctrico e hidráulico' },
    { title: 'Acabados', desc: 'Pintura y terminaciones' },
    { title: 'Entrega', desc: 'Puesta en marcha' }
  ];

  faqs = [
    { q: '¿Qué mantenimiento requieren los paneles?', a: 'Limpieza con paño suave y solución neutra; inspección de sellos anual.', open: false },
    { q: '¿Se puede ampliar la vivienda?', a: 'Sí, el sistema modular permite ampliaciones con mínima intervención.', open: false },
    { q: '¿Qué desempeño térmico alcanza?', a: 'Con PUR 80–100mm se logran transmitancias por debajo de 0.3–0.4 W/m²K.', open: false }
  ];

  readonly totalImages = 16;
  readonly indices = Array.from({ length: this.totalImages }, (_, i) => i + 1);
  currentIndex = 0;
  year = new Date().getFullYear();

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
  }

  goTo(i: number): void {
    if (i >= 0 && i < this.totalImages) this.currentIndex = i;
  }

  pad2(n: number): string {
    return n < 10 ? `0${n}` : `${n}`;
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  toggleFaq(i: number): void {
    this.faqs[i].open = !this.faqs[i].open;
  }

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
}
