import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuctompipe'
})
export class CuctompipePipe implements PipeTransform {

  transform(value: string, ...name: string[]): string {
    return "firstname "+ name;
  }

}
