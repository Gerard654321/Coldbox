import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

interface Cotizacion {
  nombre: string;
  telefono: string;
  region: string;
  direccion: string;
  pisos: number | null;
  detalles: string;
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
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class CotizarProyectoComponent implements OnInit {
  cotizacionData: Cotizacion = {
    nombre: '',
    telefono: '',
    region: '',
    direccion: '',
    pisos: null,
    detalles: '',
  };

  mensajeEnviado: boolean = false;
  regionesPeru: string[] = [];

  ngOnInit(): void {
    this.cargarRegiones();
  }

  cargarRegiones(): void {
    this.regionesPeru = [
      'Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 'Cusco', 
      'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 
      'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'
    ];
  }

  enviarCotizacion(): void {
    if (!this.cotizacionData.nombre || !this.cotizacionData.telefono || !this.cotizacionData.region || !this.cotizacionData.direccion || !this.cotizacionData.pisos || !this.cotizacionData.detalles) {
      return;
    }

    this.mensajeEnviado = true;

    const telefonoDestino = '51991038374'; 
    const mensajeBase = `Hola, mi nombre es ${this.cotizacionData.nombre} y estoy interesado en cotizar un proyecto en ${this.cotizacionData.region}. La ubicación exacta (Distrito/Calle) es ${this.cotizacionData.direccion}. El proyecto que deseo cotizar es de ${this.cotizacionData.pisos} pisos. Estos son los detalles: ${this.cotizacionData.detalles}. Espero su pronta respuesta, mi número de contacto es el ${this.cotizacionData.telefono}.`;
    
    const mensajeCodificado = encodeURIComponent(mensajeBase);
    const urlWhatsapp = `https://wa.me/${telefonoDestino}?text=${mensajeCodificado}`;

    setTimeout(() => {
      window.open(urlWhatsapp, '_blank');
      this.resetFormulario();
    }, 1500); 
  }

  resetFormulario(): void {
    this.cotizacionData = {
      nombre: '',
      telefono: '',
      region: '',
      direccion: '',
      pisos: null,
      detalles: '',
    };
    this.mensajeEnviado = false;
  }
}