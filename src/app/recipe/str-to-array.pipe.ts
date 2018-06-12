import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strToArray'
})
export class StrToArrayPipe implements PipeTransform {

  transform(value: string, args?: any): string[] {
    if (value != null) {
      return value.split('\\n');
    } else {
      return null;
    }
  }

}
