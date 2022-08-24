import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: number, code: string) {
    // should return something always
    switch (code) {
      case 'USD':
        return (value *= 0.013);
      case 'EUR':
        return (value *= 0.012);
      case 'GBP':
        return (value *= 0.01);
      case 'CAD':
        return (value *= 0.016);
      default:
        return value;
    }
  }
}
