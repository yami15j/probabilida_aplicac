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

  // Combinaciones: C(n,k) = n! / (k! * (n-k)!)
  // Seleccionar k elementos de n SIN importar el orden
  combinaciones(n: number, k: number): number {
    return this.factorial(n) / (this.factorial(k) * this.factorial(n - k));
  }

  // Variaciones: V(n,k) = n! / (n-k)!
  // Seleccionar k elementos de n donde SÍ importa el orden
  variaciones(n: number, k: number): number {
    return this.factorial(n) / this.factorial(n - k);
  }

  // Permutaciones: P(n) = n!
  // Ordenar todos los n elementos
  permutaciones(n: number): number {
    return this.factorial(n);
  }

  // Generar todas las combinaciones (sin orden)
  generarCombinaciones(array: any[], k: number): any[][] {
    if (k === 0) return [[]];
    if (array.length === 0) return [];
    const [first, ...rest] = array;
    const combsWithFirst = this.generarCombinaciones(rest, k - 1).map(c => [first, ...c]);
    const combsWithoutFirst = this.generarCombinaciones(rest, k);
    return combsWithFirst.concat(combsWithoutFirst);
  }

  // Generar todas las variaciones (con orden)
  // Variaciones = Permutaciones de k elementos tomados de n
  generarVariaciones(array: any[], k: number): any[][] {
    if (k === 0) return [[]];
    if (k > array.length) return [];
    
    let result: any[][] = [];
    
    // Para cada elemento del array
    for (let i = 0; i < array.length; i++) {
      // Tomamos el elemento actual
      const elemento = array[i];
      
      // Obtenemos el resto de elementos (sin el actual)
      const resto = [...array.slice(0, i), ...array.slice(i + 1)];
      
      // Generamos variaciones de k-1 elementos con el resto
      const variacionesResto = this.generarVariaciones(resto, k - 1);
      
      // Agregamos el elemento actual al inicio de cada variación
      variacionesResto.forEach(v => {
        result.push([elemento, ...v]);
      });
    }
    
    return result;
  }

  // Generar todas las permutaciones (todos los elementos con orden)
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