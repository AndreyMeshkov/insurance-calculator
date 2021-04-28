import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @HostBinding('style.backgroundColor') elBackground = null;

  @HostListener('mouseenter') onEnter() {
    this.elBackground = '#00ff00';
  }

  @HostListener('mouseleave') onLeave() {
    this.elBackground = null;
  }
}
