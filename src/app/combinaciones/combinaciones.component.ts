import { Component } from '@angular/core';
import { CalculosService } from '../calculos.service';

@Component({
  selector: 'app-combinaciones',
  templateUrl: './combinaciones.component.html',
  styleUrls: ['./combinaciones.component.css']
})
export class CombinacionesComponent {
  elementosStr = '';
  k = 0;
  resultadoNumero: number | null = null;
  combinacionesLista: any[][] = [];

  constructor(private calculos: CalculosService) {}

  calcular() {
    const elementos = this.elementosStr.split(',').map(e => e.trim());
    this.resultadoNumero = this.calculos.combinaciones(elementos.length, this.k);
    this.combinacionesLista = this.calculos.generarCombinaciones(elementos, this.k);
  }
}
