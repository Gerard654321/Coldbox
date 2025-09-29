import { Component, AfterViewInit, OnDestroy, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  name: string;
  status: 'Culminado' | 'En Proceso';
  location: string;
  area: string;
  type: string;
  cost: string;
  description: string;
  features: string[];
  images: string[];
}

@Component({
  selector: 'app-nuestros-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuestros-proyectos.component.html',
  styleUrl: './nuestros-proyectos.component.scss'
})
export class NuestrosProyectosComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('animateOnScrollRef', { read: ElementRef })
  elementsToAnimate!: QueryList<ElementRef>;
  observer!: IntersectionObserver;

  selectedProject: Project | null = null;
  currentImageIndex: number = 0;

  projects: Project[] = [
    {
      id: 1, name: 'Edificio Residencial Lima', status: 'Culminado', location: 'Lima', area: '5,200 m²',
      type: 'Residencial', cost: '$1.2M', description: 'Proyecto habitacional de lujo enfocado en la eficiencia energética gracias al uso de isopanel en muros divisorios y techos.',
      features: ['Aislamiento térmico superior', 'Diseño sismo-resistente', 'Acabados premium', 'Certificación verde'],
      images: ['/assets/Casa03/Casa03.1.JPG', '/assets/Casa03/Casa03.2.JPG', '/assets/Casa03/Casa03.3.JPG']
    },
    {
      id: 2, name: 'Centro Empresarial Miraflores', status: 'Culminado', location: 'Miraflores', area: '9,800 m²',
      type: 'Oficinas', cost: '$2.5M', description: 'Moderno centro corporativo ubicado en la zona financiera, optimizado para el ahorro de energía y costos operativos.',
      features: ['Fachada ventilada de isopanel', 'Sistemas HVAC de alta eficiencia', 'Espacios modulares', 'Seguridad 24/7'],
      images: ['/assets/Casa03/Casa03.1.JPG', '/assets/Casa03/Casa03.2.JPG']
    },
    { id: 3, name: 'Proyecto Industrial Arequipa', status: 'Culminado', location: 'Arequipa', area: '12,000 m²', type: 'Almacén', cost: '$1.8M', description: 'Infraestructura robusta para el almacenamiento y logística industrial.', features: ['Gran capacidad de carga', 'Control de temperatura', 'Estructura modular'], images: ['/assets/Casa03/Casa03.1.JPG'] },
    { id: 4, name: 'Centro Comercial Cusco', status: 'Culminado', location: 'Cusco', area: '4,500 m²', type: 'Comercial', cost: '$0.9M', description: 'Estructura comercial adaptada a las condiciones climáticas de la sierra, garantizando confort a los visitantes.', features: ['Aislamiento térmico', 'Diseño andino moderno', 'Amplios espacios de parqueo'], images: ['/assets/Casa03/Casa03.1.JPG'] },
    { id: 7, name: 'Residencial Puno', status: 'Culminado', location: 'Puno', area: '3,000 m²', type: 'Residencial', cost: '$0.7M', description: 'Viviendas de diseño eficiente en Puno.', features: ['Calefacción pasiva', 'Uso de isopanel', 'Vista panorámica'], images: ['/assets/Casa03/Casa03.1.JPG'] },
    { id: 8, name: 'Residencial Costa Norte', status: 'En Proceso', location: 'Piura', area: '6,000 m²', type: 'Residencial', cost: '$1.4M', description: 'Viviendas de lujo y alto rendimiento en la costa, usando tecnología isopanel.', features: ['Resistencia a la humedad', 'Alta resistencia al viento', 'Entrega en Q4 2024'], images: ['/assets/Casa03/Casa03.1.JPG'] },
    { id: 9, name: 'Planta Logística Sur', status: 'En Proceso', location: 'Ica', area: '15,000 m²', type: 'Industrial', cost: '$2.0M', description: 'Estructura de almacenamiento masiva con enfoque en eficiencia térmica.', features: ['Cámaras de frío modulares', 'Control de acceso avanzado', 'Gran altura'], images: ['/assets/Casa03/Casa03.1.JPG'] }
  ];

  openProjectModal(project: Project): void {
    this.selectedProject = project;
    this.currentImageIndex = 0;
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  prevImage(): void {
    if (!this.selectedProject) return;
    this.currentImageIndex = (this.currentImageIndex - 1 + this.selectedProject.images.length) % this.selectedProject.images.length;
  }

  nextImage(): void {
    if (!this.selectedProject) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedProject.images.length;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 100);
  }

  setupIntersectionObserver(): void {
    if (!this.elementsToAnimate || this.elementsToAnimate.length === 0) {
      return;
    }
    const options = { root: null, rootMargin: '0px', threshold: 0.1 };
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    this.elementsToAnimate.forEach(el => {
      this.observer.observe(el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
