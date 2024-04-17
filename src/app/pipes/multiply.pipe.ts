import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
  standalone: true
})
export class MultiplyPipe implements PipeTransform {

  public transform(valueOne: any, valueTwo: any) {
    return Math.abs(valueOne * valueTwo);
  }

}
