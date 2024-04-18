import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusMinus',
  standalone: true
})
export class PlusMinusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
