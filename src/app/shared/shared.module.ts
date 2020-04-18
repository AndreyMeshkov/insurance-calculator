import {NgModule} from '@angular/core';
import {BackgroundDirective} from './directives/background.directive';
import {PageNamePipe} from './pipes/page-name.pipe';

@NgModule({
  declarations: [
    BackgroundDirective,
    PageNamePipe
  ],
  exports: [
    BackgroundDirective,
    PageNamePipe
  ],
})
export class SharedModule {}
