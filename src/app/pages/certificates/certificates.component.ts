import { Component } from '@angular/core';

interface Certificado {
  titulo: string;
  institucion: string;
  categoria: string;
  fecha: string;
  archivo: string;
  destacado?: boolean;
}

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {

  certificados: Certificado[] = [
    {
      titulo: 'Conceptos Básicos de Hardware de Computadora',
      institucion: 'Cisco Networking Academy / INFOP',
      categoria: 'Hardware',
      fecha: '23 Mar 2025',
      archivo: 'assets/certificados/hardware-computadora.pdf'
    },
    {
      titulo: 'Introducción a la Ciencia de Datos',
      institucion: 'Cisco Networking Academy',
      categoria: 'Datos',
      fecha: '15 May 2025',
      archivo: 'assets/certificados/ciencia-datos.pdf'
    },
    {
      titulo: 'Conceptos básicos de redes',
      institucion: 'Cisco Networking Academy',
      categoria: 'Redes',
      fecha: '16 Mar 2026',
      archivo: 'assets/certificados/redes-basicas.pdf'
    },
    {
      titulo: 'Introduction to Cybersecurity',
      institucion: 'Cisco Networking Academy / CURN',
      categoria: 'Ciberseguridad',
      fecha: '10 Apr 2026',
      archivo: 'assets/certificados/introduccion-ciberseguridad.pdf',
      destacado: true
    },
    {
      titulo: 'Gestión de Amenazas Cibernéticas',
      institucion: 'Cisco Networking Academy',
      categoria: 'Ciberseguridad',
      fecha: '13 Apr 2026',
      archivo: 'assets/certificados/gestion-amenazas-ciberneticas.pdf',
      destacado: true
    }
  ];

  abrirCertificado(ruta: string): void {
    window.open(ruta, '_blank');
  }

  trackByTitulo(index: number, certificado: Certificado): string {
    return certificado.titulo;
  }
}