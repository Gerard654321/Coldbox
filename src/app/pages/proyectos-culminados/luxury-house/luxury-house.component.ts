import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectStat = { label: string; value: string };
type TimelineStep = { title: string; desc: string };

@Component({
  selector: 'app-luxury-house',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './luxury-house.component.html',
  styleUrls: ['./luxury-house.component.scss']
})
export class LuxuryHouseComponent {
  project = {
    name: 'Luxury House',
    location: 'El Háras, Ica',
    status: 'Proyecto culminado',
    description:
      'Luxury House es un proyecto residencial de una planta diseñado para combinar modernidad, amplitud y confort en un solo nivel. Ubicado en la ciudad de Ica, Perú, este hogar ofrece una experiencia de vida práctica y luminosa, rodeada de naturaleza y espacios abiertos. Desarrollado sobre un terreno amplio y bien distribuido, el proyecto cuenta con cuatro habitaciones y cinco baños, garantizando comodidad y privacidad para todos los miembros de la familia. La sala, el comedor y la cocina integrada conforman un ambiente social abierto, ideal para compartir momentos en familia o con amigos.'
  };

  stats: ProjectStat[] = [
    { label: 'Área', value: '200 m²' },
    { label: 'Habitaciones', value: '03' },
    { label: 'Baños', value: '03' },
    { label: 'Estructura', value: 'Poliestireno' },
    { label: 'Entrega', value: 'Agosto 2024' }
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

  readonly totalImages = 12;
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
