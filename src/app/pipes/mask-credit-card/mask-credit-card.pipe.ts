import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskCreditCard'
})
export class MaskCreditCardPipe implements PipeTransform {

  transform(value: string | number, args?: number): any {
    let input: string = '';
    if (value) {
      if (typeof value === 'number') {
        input = value.toString();
      } else {
        input = value;
      }
      if (!args) {
        args = 4;
      }
      const mask: string = new Array(input.length - args).join('*');
      return mask + input.substr(input.length - args, args);
    }
    return null;
  }

}
