import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectStat = { label: string; value: string };
type TimelineStep = { title: string; desc: string };

@Component({
  selector: 'app-casa-doble',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casa-doble.component.html',
  styleUrls: ['./casa-doble.component.scss']
})
export class CasaDobleComponent {
  project = {
    name: 'Brisas del Sol',
    location: 'El Háras, Ica',
    status: 'Proyecto en proceso',
    description:
      'Brisas del Sol es un proyecto residencial exclusivo ubicado en la prestigiosa Urbanización El Háras, en la ciudad de Ica, Perú. Este desarrollo arquitectónico está conformado por dos modernas casas unidas, diseñadas para ofrecer confort, estilo y funcionalidad en un entorno de alta calidad urbana. Cada vivienda se levanta sobre un área de 200 m², conformando en conjunto un terreno total de 400 m². Brisas del Sol representa la perfecta combinación entre elegancia moderna y practicidad, con líneas arquitectónicas limpias, materiales de alta calidad y un enfoque en la vida al aire libre, aprovechando el clima soleado característico de Ica. Su entrega está proyectada para febrero del 2026, consolidándose como una de las propuestas residenciales más atractivas y funcionales de la zona.'
  };

  stats: ProjectStat[] = [
    { label: 'Área', value: '400 m²' },
    { label: 'Viviendas', value: '02' },
    { label: 'Pisos', value: '03' },
    { label: 'Estructura', value: 'ISOPANEL' },
    { label: 'Entrega', value: 'Febrero 2026' }
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

  readonly totalImages = 21;
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
