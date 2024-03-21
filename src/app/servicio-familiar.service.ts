import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioFamiliarService {
  hermanoMayor?: string;
  hermanoMenor?: string;

  getHermanoMayor() {
    return this.hermanoMayor || '';
  }

  setHermanoMayor(hermano: string) {
    this.hermanoMayor = hermano;
  }

  getHermanoMenor() {
    return this.hermanoMenor || '';
  }

  setHermanoMenor(hermano: string) {
    this.hermanoMenor = hermano;
  }

  saludar(hermano: string): void {
    console.log(`Hola soy ${hermano}`);
  }

  preguntarHijo(): string {
    return `Como esta tu  hijo`;
  }

  constructor() {}
}
