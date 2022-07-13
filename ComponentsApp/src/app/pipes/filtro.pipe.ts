import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = '', col: string = 'title'): any[] {
    console.log(arreglo);
    console.log(texto);

    if ( texto === '' ) {
      return arreglo;
    }

    if (!arreglo) {
      return arreglo;
    }

    texto = texto.toLowerCase();


    return arreglo.filter(
        item => item[col].toLowerCase().includes(texto)
    );
  }

}
