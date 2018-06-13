import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from './recipe.model';
import {isNullOrUndefined} from 'util';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipePipe implements PipeTransform {

  transform(value: Recipe[], args?: any): Recipe[] {
    if (value != null) {
      value.sort((r1, r2) => isNullOrUndefined(r1.name) ? -1 : r1.name.localeCompare(r2.name));
    }
    return value;
  }

}
