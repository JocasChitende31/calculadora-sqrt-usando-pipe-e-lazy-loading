import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusMinus',
  standalone: true
})
export class PlusMinusPipe implements PipeTransform {

  public transform(valueOne: number, valueTwo: number, signal: string) {
    if (signal === '+') {
      return Math.abs(valueOne + valueTwo);
      // if (valueOne < 0 && valueTwo < 0) {
      // } else {
      //   return;
      // }
    } else {
      return valueOne < valueTwo ? -1 * Math.abs(valueOne - valueTwo) : Math.abs(valueOne - valueTwo);

    }

  }
}
