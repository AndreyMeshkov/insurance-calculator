import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageName'
})
export class PageNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
