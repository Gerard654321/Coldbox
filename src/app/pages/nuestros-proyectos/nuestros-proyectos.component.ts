import { Component, AfterViewInit, OnDestroy, ElementRef, QueryList, ViewChildren, Renderer2, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  name: string;
  status: 'Culminado' | 'En Proceso';
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
  private observer!: IntersectionObserver;

  selectedProject: Project | null = null;
  currentImageIndex: number = 0;
  modalImageCount: number = 0;
  imageIndices: number[] = [];

  private projectImageCounts: { [key: number]: number } = {
    1: 23,
    2: 18,
    3: 23,
    4: 5,
    5: 16,
    6: 6,
  };

  projectsCulminadosIds: number[] = [1, 2, 3, 4];
  projectsEnProcesoIds: number[] = [5, 6];

  constructor(private renderer: Renderer2) {}

  openProjectModal(id: number, name: string, status: 'Culminado' | 'En Proceso'): void {
    const count = this.projectImageCounts[id] || 0;
    this.modalImageCount = count;
    this.imageIndices = Array.from({ length: count }, (_, i) => i);

    this.selectedProject = { id, name, status };
    this.currentImageIndex = 0;
    this.renderer.addClass(document.body, 'modal-open');
  }

  closeProjectModal(): void {
    this.selectedProject = null;
    this.imageIndices = [];
    this.renderer.removeClass(document.body, 'modal-open');
  }

  prevImage(): void {
    if (!this.selectedProject || this.modalImageCount === 0) return;
    this.currentImageIndex = (this.currentImageIndex - 1 + this.modalImageCount) % this.modalImageCount;
  }

  nextImage(): void {
    if (!this.selectedProject || this.modalImageCount === 0) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.modalImageCount;
  }

  ngAfterViewInit(): void {
    if ('IntersectionObserver' in window) {
      setTimeout(() => {
        this.setupIntersectionObserver();
      }, 100);
    } else {
    }
  }

  setupIntersectionObserver(): void {
    if (!this.elementsToAnimate || this.elementsToAnimate.length === 0) {
      return;
    }

    const options = { root: null, rootMargin: '0px', threshold: 0.1 };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.elementsToAnimate.forEach(el => {
      this.observer.observe(el.nativeElement);
    });
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.selectedProject) {
      this.closeProjectModal();
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.renderer.removeClass(document.body, 'modal-open');
  }
}