import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

 @Input() recibeHijo?:string
 @Output() mensajeEnviadoHijo = new EventEmitter<string>()

 nombreHijo:string='Hijo de juenito'

 mensaje:string=''

 enviarMensje(){
  this.mensajeEnviadoHijo.emit(this.mensaje)
 }
}