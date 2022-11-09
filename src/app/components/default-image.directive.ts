import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'img[default]',
})

export class DefaultImageDirective {
  @HostBinding('src')
  @Input() src?: string;

  @HostListener('error')
  @Input() default?: string;

  updateUrl(): void {
    this.src = this.default;
  }
}