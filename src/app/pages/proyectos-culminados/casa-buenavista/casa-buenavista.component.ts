import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectStat = { label: string; value: string };
type TimelineStep = { title: string; desc: string };

@Component({
  selector: 'app-casa-buenavista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casa-buenavista.component.html',
  styleUrls: ['./casa-buenavista.component.scss']
})
export class CasaBuenavistaComponent {
  project = {
    name: 'Casa Buenavista',
    location: 'El Háras, Ica',
    status: 'Proyecto culminado',
    description:
      'Casa Buenavista es un proyecto residencial de dos pisos ubicado en la reconocida Urbanización El Háras, en la ciudad de Ica, Perú. Concebida bajo un enfoque moderno y funcional, esta vivienda combina amplitud, confort y elegancia en un entorno ideal para disfrutar del clima soleado característico de la región. La casa se distingue por su diseño luminoso y ventilado, aprovechando al máximo la entrada de luz natural en todos sus ambientes. En el primer nivel, se integran de manera fluida la sala, el comedor y la cocina, generando un espacio abierto que fomenta la convivencia familiar y la amplitud visual.'
  };

  stats: ProjectStat[] = [
    { label: 'Área', value: '200 m²' },
    { label: 'Dormitorios', value: '04' },
    { label: 'Baños', value: '04' },
    { label: 'Estructura', value: 'ISOPANEL' },
    { label: 'Entrega', value: 'Enero 2023' }
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

  readonly totalImages = 24;
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
