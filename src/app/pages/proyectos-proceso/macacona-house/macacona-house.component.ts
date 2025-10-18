import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectStat = { label: string; value: string };
type TimelineStep = { title: string; desc: string };

@Component({
  selector: 'app-macacona-house',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './macacona-house.component.html',
  styleUrls: ['./macacona-house.component.scss']
})
export class MacaconaHouseComponent {
  project = {
    name: 'Casa Nuevo Horizonte',
    location: 'Urb. Macacona, Ica',
    status: 'Proyecto en proceso',
    description:
      'Casa Nuevo Horizonte es un proyecto residencial de una planta ubicado en la exclusiva Urbanización Macacona, en la ciudad de Ica, Perú. Concebido como un espacio moderno, amplio y funcional, este proyecto se desarrolla sobre un terreno de 400 m², combinando elegancia arquitectónica con el confort de un hogar contemporáneo. El diseño integra 06 amplias habitaciones y 04 baños completos, distribuidos estratégicamente para brindar privacidad y comodidad a cada miembro de la familia. La zona social cuenta con una sala de estar luminosa, un comedor principal y una cocina moderna de concepto abierto, que permite la integración visual y funcional de los ambientes. En el exterior, la vivienda ofrece amplias áreas verdes ideales para el descanso y la recreación, además de una zona de parrilla y una piscina privada, perfectas para reuniones familiares y sociales al aire libre. El proyecto incluye también una cochera techada, asegurando comodidad y seguridad vehicular.'
  };

  stats: ProjectStat[] = [
    { label: 'Área', value: '400 m²' },
    { label: 'Habitaciones', value: '06' },
    { label: 'Zonas', value: 'Piscina | Parrilla' },
    { label: 'Estructura', value: 'ISOPANEL' },
    { label: 'Entrega', value: 'Diciembre 2025' }
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

  readonly totalImages = 30;
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
