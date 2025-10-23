import { Component } from '@angular/core';
import { CalculosService } from '../calculos.service';

@Component({
  selector: 'app-combinaciones',
  templateUrl: './combinaciones.component.html',
  styleUrls: ['./combinaciones.component.css']
})
export class CombinacionesComponent {
  enunciado = 'De un grupo de 6 estudiantes (S1,S2,S3,S4,S5,S6), ¿de cuántas formas se pueden elegir 3 para ocupar los cargos de presidente, vicepresidente y secretario?';
  elementosStr = '';
  k = 0;
  resultadoNumero: number | null = null;
  combinacionesLista: any[][] = [];

  constructor(private calculos: CalculosService) {}

  calcular() {
    const elementos = this.elementosStr.split(',').map(e => e.trim());
    
    if (elementos.length === 0 || this.k <= 0) {
      alert('Por favor ingresa elementos válidos y un valor de k mayor a 0');
      return;
    }
    
    if (this.k > elementos.length) {
      alert('El valor de k no puede ser mayor que el número de elementos');
      return;
    }
    
    // Para variaciones usamos permutaciones de k elementos
    this.resultadoNumero = this.calculos.variaciones(elementos.length, this.k);
    this.combinacionesLista = this.calculos.generarVariaciones(elementos, this.k);
  }
}