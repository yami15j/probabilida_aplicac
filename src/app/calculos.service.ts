import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {

  constructor() { }

  factorial(n: number): number {
    if(n <= 1) return 1;
    return n * this.factorial(n - 1);
  }

  combinaciones(n: number, k: number): number {
    return this.factorial(n) / (this.factorial(k) * this.factorial(n - k));
  }

  permutaciones(n: number): number {
    return this.factorial(n);
  }

  generarCombinaciones(array: any[], k: number): any[][] {
    if (k === 0) return [[]];
    if (array.length === 0) return [];
    const [first, ...rest] = array;
    const combsWithFirst = this.generarCombinaciones(rest, k - 1).map(c => [first, ...c]);
    const combsWithoutFirst = this.generarCombinaciones(rest, k);
    return combsWithFirst.concat(combsWithoutFirst);
  }

  generarPermutaciones(array: any[]): any[][] {
    if (array.length === 0) return [[]];
    let result: any[][] = [];
    for (let i = 0; i < array.length; i++) {
      const rest = [...array.slice(0, i), ...array.slice(i + 1)];
      const perms = this.generarPermutaciones(rest);
      perms.forEach(p => result.push([array[i], ...p]));
    }
    return result;
  }
}
