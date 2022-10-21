import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IconType } from '../icon/icon.component';
import { SafeAny } from '../utils/safe-any';

import { ButtonIconSizeOptions } from '../types/button'

type Type = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';
type Color = 'primary-color' | 'secondary-color';

export interface AppButtonProps {
  label?: string;
  type?: Type;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  iconType?: IconType;
  rightSideIcon?: boolean;
  expand?: boolean;
  colorType?: Color;
  buttonOnClick?: EventEmitter<SafeAny>;
}
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  @Input() label?: string;
  @Input() type?: Type = 'primary';
  @Input() size: Size = 'sm';
  @Input() disabled? = false;
  @Input() loading? = false;
  @Input() iconType?: string = '';
  @Input() rightSideIcon?: boolean = false;
  @Input() expand?: boolean = false;
  @Input() colorType?: Color = 'primary-color';
  @Output() buttonOnClick = new EventEmitter();
  
  public iconSize!: ButtonIconSizeOptions;

  handleClick() {
    if (!this.loading && !this.disabled) {
      this.loading = !this.loading;
      this.buttonOnClick.emit();
    }
  }

  expandButton() {
    return this.expand ? '100%' : '';
  }

  ghostColor() {
    return this.type === 'ghost' ? ' text-' + this.colorType : '';
  }

  ngOnInit() {
    this.iconSize = ButtonIconSizeOptions[this.size];
  }
}