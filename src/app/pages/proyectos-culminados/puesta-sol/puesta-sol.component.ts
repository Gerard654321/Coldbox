import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectStat = { label: string; value: string };
type TimelineStep = { title: string; desc: string };

@Component({
  selector: 'app-puesta-sol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './puesta-sol.component.html',
  styleUrls: ['./puesta-sol.component.scss']
})
export class PuestaSolComponent {
  project = {
    name: 'Casa Puesta del Sol',
    location: 'El Háras, Ica',
    status: 'Proyecto culminado',
    description:
      'Puesta del Sol es un elegante proyecto dúplex desarrollado sobre una base de un solo piso, que combina un diseño moderno con el encanto natural del clima iqueño. Ubicado en una zona residencial de alta proyección en Ica, Perú, este proyecto ofrece confort, estilo y funcionalidad en un área total de 160 m². La vivienda cuenta con tres amplias habitaciones y tres baños, distribuidos inteligentemente para brindar privacidad y comodidad a sus ocupantes. En el primer nivel, los espacios sociales sala, comedor y cocina integrada se unen en un ambiente abierto, luminoso y acogedor que fomenta la convivencia familiar.'
  };

  stats: ProjectStat[] = [
    { label: 'Área', value: '160 m²' },
    { label: 'Habitaciones', value: '03' },
    { label: 'Baños', value: '03' },
    { label: 'Estructura', value: 'ISOPANEL' },
    { label: 'Entrega', value: 'Octubre 2024' }
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

  readonly totalImages = 13;
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
