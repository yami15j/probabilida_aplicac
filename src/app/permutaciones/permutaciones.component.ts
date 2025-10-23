import { Component } from '@angular/core';
import { CalculosService } from '../calculos.service';

@Component({
  selector: 'app-permutaciones',
  templateUrl: './permutaciones.component.html',
  styleUrls: ['./permutaciones.component.css']
})
export class PermutacionesComponent {
  enunciado = '¿De cuántas formas diferentes se pueden ordenar 5 libros (A,B,C,D,E) en un estante?';
  elementosStr = '';
  resultadoNumero: number | null = null;
  permutacionesLista: any[][] = [];

  constructor(private calculos: CalculosService) {}

  calcular() {
    const elementos = this.elementosStr.split(',').map(e => e.trim()).filter(e => e.length > 0);
    
    if (elementos.length === 0) {
      alert('Por favor ingresa al menos un elemento');
      return;
    }
    
    if (elementos.length > 8) {
      const confirmar = confirm(
        `⚠️ Has ingresado ${elementos.length} elementos.\n` +
        `Esto generará ${this.calculos.factorial(elementos.length)} permutaciones.\n\n` +
        `Esto puede tardar un momento. ¿Deseas continuar?`
      );
      if (!confirmar) return;
    }
    
    this.resultadoNumero = this.calculos.permutaciones(elementos.length);
    this.permutacionesLista = this.calculos.generarPermutaciones(elementos);
  }
}