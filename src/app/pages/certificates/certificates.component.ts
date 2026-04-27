import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Certificado {
  titulo: string;
  institucion: string;
  categoria: string;
  fecha: string;
  archivo: string;
  destacado?: boolean;
  previewUrl?: SafeResourceUrl;
  modalUrl?: SafeResourceUrl;
}

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {

  certificadoSeleccionado: Certificado | null = null;

  certificados: Certificado[] = [];

  constructor(private sanitizer: DomSanitizer) {
    const data: Certificado[] = [
       {
  titulo: 'Claude Code in Action',
  institucion: 'Anthropic',
  categoria: 'Inteligencia Artificial',
  fecha: '18 Mar 2026',
  archivo: 'assets/certificados/claude-code-in-action.pdf',
  destacado: true
},
{
  titulo: 'Claude 101',
  institucion: 'Anthropic',
  categoria: 'Inteligencia Artificial',
  fecha: '26 Abr 2026',
  archivo: 'assets/certificados/claude-101.pdf',
  destacado: true
},
{
  titulo: 'AI Fluency for Students',
  institucion: 'Anthropic',
  categoria: 'Inteligencia Artificial',
  fecha: '2026',
  archivo: 'assets/certificados/ai-fluency-for-students.pdf',
  destacado: true
},
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
      },
      {
  titulo: 'Introducción a la Programación en Java',
  institucion: 'INFOP',
  categoria: 'Programación',
  fecha: '26 Feb 2025',
  archivo: 'assets/certificados/introduccion-java.pdf'
},
{
  titulo: 'Internet de las Cosas IoT',
  institucion: 'INFOP',
  categoria: 'IoT',
  fecha: '26 Feb 2025',
  archivo: 'assets/certificados/internet-de-las-cosas-iot.pdf'
},
{
  titulo: 'Programar en Python',
  institucion: 'INFOP',
  categoria: 'Programación',
  fecha: '11 Mar 2025',
  archivo: 'assets/certificados/programacion-python.pdf'
},
{
  titulo: 'Base de Datos MySQL',
  institucion: 'INFOP',
  categoria: 'Bases de datos',
  fecha: '20 Mar 2025',
  archivo: 'assets/certificados/base-de-datos-mysql.pdf',
  destacado: true
},
{
  titulo: 'Dirección de Marketing Online',
  institucion: 'INFOP',
  categoria: 'Marketing',
  fecha: '20 Mar 2025',
  archivo: 'assets/certificados/direccion-de-marketing-online.pdf'
},
{
  titulo: 'Diseño Web HTML5 y WordPress',
  institucion: 'INFOP',
  categoria: 'Diseño web',
  fecha: '20 Mar 2025',
  archivo: 'assets/certificados/diseno-web-html-wordpress.pdf',
  destacado: true
},
{
  titulo: 'MS Excel Intermedio',
  institucion: 'INFOP',
  categoria: 'Herramientas',
  fecha: '12 Abr 2025',
  archivo: 'assets/certificados/excel-intermedio.pdf'
},
{
  titulo: 'Uso y Herramientas Básicas de Computación',
  institucion: 'INFOP / Cisco',
  categoria: 'Computación',
  fecha: '15 Abr 2025',
  archivo: 'assets/certificados/herramientas-basicas-computacion.pdf'
},
{
  titulo: 'Conociendo la Big Data',
  institucion: 'INFOP',
  categoria: 'Datos',
  fecha: '12 Abr 2025',
  archivo: 'assets/certificados/conociendo-big-data.pdf'
},
   
    ];

    this.certificados = data.map(certificado => ({
      ...certificado,
      previewUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `${certificado.archivo}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`
      ),
      modalUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `${certificado.archivo}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`
      )
    }));
  }

  abrirModal(certificado: Certificado): void {
    this.certificadoSeleccionado = certificado;
  }

  cerrarModal(): void {
    this.certificadoSeleccionado = null;
  }

  abrirPdf(ruta: string): void {
    window.open(ruta, '_blank');
  }

  trackByTitulo(index: number, certificado: Certificado): string {
    return certificado.titulo;
  }
}