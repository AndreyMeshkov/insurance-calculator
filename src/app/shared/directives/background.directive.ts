import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @HostBinding('style.backgroundColor') elBackground = null;

  @HostListener('mouseenter') onEnter() {
    this.elBackground = 'green';
  }

  @HostListener('mouseleave') onLeave() {
    this.elBackground = null;
  }
}
