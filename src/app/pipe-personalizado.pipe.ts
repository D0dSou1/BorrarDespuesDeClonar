import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePersonalizado'
})
export class PipePersonalizadoPipe implements PipeTransform {

  transform(valor:string | undefined): string {
    return valor?.toUpperCase() || '';
  }

}
