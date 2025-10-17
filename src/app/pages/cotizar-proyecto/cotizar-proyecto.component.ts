import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

interface Cotizacion {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

@Component({
  selector: 'app-cotizar-proyecto',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './cotizar-proyecto.component.html',
  styleUrl: './cotizar-proyecto.component.scss',
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('280ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class CotizarProyectoComponent implements OnInit, OnDestroy {
  cotizacionData: Cotizacion = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  };

  mensajeEnviado = false;
  enviando = false;
  regionesPeru: string[] = [];

  ngOnInit(): void {
    this.cargarRegiones();
    this.iniciarCarrusel();
  }

  ngOnDestroy(): void {
    if (this.intervaloCarrusel) clearInterval(this.intervaloCarrusel);
  }

  cargarRegiones(): void {
    this.regionesPeru = [
      'Amazonas','Áncash','Apurímac','Arequipa','Ayacucho','Cajamarca','Callao','Cusco',
      'Huancavelica','Huánuco','Ica','Junín','La Libertad','Lambayeque','Lima','Loreto',
      'Madre de Dios','Moquegua','Pasco','Piura','Puno','San Martín','Tacna','Tumbes','Ucayali'
    ];
  }

  validarFormulario(): boolean {
    return !!(
      this.cotizacionData.nombre &&
      this.cotizacionData.email &&
      this.cotizacionData.telefono &&
      this.cotizacionData.mensaje
    );
  }

  enviarCotizacion(): void {
    if (!this.validarFormulario()) return;

    this.enviando = true;
    this.mensajeEnviado = true;

    const telefonoDestino = '51991038374';
    const mensajeBase = `Hola, mi nombre es ${this.cotizacionData.nombre} (${this.cotizacionData.email}) y me gustaría solicitar un presupuesto. Mi consulta es la siguiente: "${this.cotizacionData.mensaje}". Mi número de contacto es ${this.cotizacionData.telefono}.`;
    const mensajeCodificado = encodeURIComponent(mensajeBase);
    const urlWhatsapp = `https://wa.me/${telefonoDestino}?text=${mensajeCodificado}`;

    setTimeout(() => {
      window.open(urlWhatsapp, '_blank');
      this.resetFormulario();
      this.enviando = false;
    }, 900);
  }

  resetFormulario(): void {
    this.cotizacionData = {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
    };
    this.mensajeEnviado = false;
  }

  currentSlide = 0;
  totalSlides = 3;
  intervaloCarrusel: any;

  iniciarCarrusel(): void {
    this.intervaloCarrusel = setInterval(() => {
      this.siguienteSlide();
    }, 6000);
  }

  cambiarSlide(index: number): void {
    this.currentSlide = index;
    this.actualizarClasesCarrusel();
  }

  siguienteSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.actualizarClasesCarrusel();
  }

  anteriorSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.actualizarClasesCarrusel();
  }

  actualizarClasesCarrusel(): void {
    const slides = document.querySelectorAll('.carousel-slide-item');
    const indicators = document.querySelectorAll('.indicator');

    slides.forEach((slide, index) => {
      if (index === this.currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    indicators.forEach((indicator, index) => {
      if (index === this.currentSlide) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
}
