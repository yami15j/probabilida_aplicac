import { Component } from '@angular/core';
import { CalculosService } from '../calculos.service';


@Component({
  selector: 'app-permutaciones',
  templateUrl: './permutaciones.component.html',
  styleUrls: ['./permutaciones.component.css']
})
export class PermutacionesComponent {
  elementosStr = '';
  resultadoNumero: number | null = null;
  permutacionesLista: any[][] = [];

  constructor(private calculos: CalculosService) {}

  calcular() {
    const elementos = this.elementosStr.split(',').map(e => e.trim());
    this.resultadoNumero = this.calculos.permutaciones(elementos.length);
    this.permutacionesLista = this.calculos.generarPermutaciones(elementos);
  }
}
