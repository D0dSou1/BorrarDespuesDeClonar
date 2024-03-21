import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  Nombre?: string;
  // constructor(private _servicioFamiliar: ServicioFamiliarService) {}

  fecha?:Date = new Date()
  dolar?:number = 1000.5

  private _servicioFamiliar2 = inject(ServicioFamiliarService)

  ngOnInit(): void {
    this._servicioFamiliar2.setHermanoMayor('Juanito Habichuela');
    this.Nombre = this._servicioFamiliar2.getHermanoMayor();
  }

  saludar() {
    this._servicioFamiliar2.saludar(
      this._servicioFamiliar2.getHermanoMenor() || ''
    );
  }

  preguntar() {
    console.log(this._servicioFamiliar2.preguntarHijo());
  }
}
