import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
  standalone: true
})
export class MultiplyPipe implements PipeTransform {

  public transform(valueOne: any, valueTwo: any) {
    if (valueOne < 0 && valueTwo < 0) {
      return (Math.abs(valueOne * valueTwo));
    } if (valueOne < 0 || valueTwo < 0) {
      return (-Math.abs(valueOne * valueTwo));
    } else {
      return (Math.abs(valueOne * valueTwo));
    }
  }

}
