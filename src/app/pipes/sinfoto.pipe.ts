import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[]): string {

    let noimage = 'assets/img/noimage.png'
    if (!value) {
      return noimage
    }

    // ? Si el value tiene más de 0 entonces... sino : 
    return (value.length > 0) ? value[1].url : noimage;
  }

}
