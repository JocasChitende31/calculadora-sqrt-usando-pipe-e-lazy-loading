import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplieTable',
  standalone: true
})
export class MultiplieTablePipe implements PipeTransform {

  public transform(value: number) {
    const tabuada = [];
    for (let i = 1; i <= 12; i++) {
      let op = ('\n' + `${value} x ${i} = ` + Math.abs(value * i));
      tabuada.push(op);
    }
    return tabuada.join("");
  }

}
