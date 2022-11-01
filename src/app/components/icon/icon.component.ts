import { Component, Input, ElementRef } from '@angular/core';
import { iconsPaths } from './svgs/icons';
import { DomSanitizer } from '@angular/platform-browser';

export type SvgModule = typeof import('./svgs/icons');
export type IconType = keyof typeof iconsPaths;

export interface IconProps {
  type: IconType ,
  size?: number,
  color?: string, 
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class AppIconComponent {
  @Input() type!: IconType;
  @Input() size = 17;
  @Input() color = '#fcfaff'

  constructor(private sanitizer: DomSanitizer, private el: ElementRef) {}

  getPath() {
    return this.sanitizer.bypassSecurityTrustHtml(iconsPaths[this.type]);
  }

  changeColor() {
    return this.type === "add" ? this.color : 'transparent'
  }
}