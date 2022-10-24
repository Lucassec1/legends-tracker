import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IconType } from '../icon/icon.component';
import { SafeAny } from '../utils/safe-any';

import { ButtonIconSizeOptions } from '../core/types/button'

type Type = 'primary' | 'secondary';
type Size = 'sm' | 'md' | 'lg';

export interface AppButtonProps {
  label?: string;
  type?: Type;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  iconType?: IconType;
  rightSideIcon?: boolean;
  expand?: boolean;
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
  @Output() buttonOnClick = new EventEmitter();
  
  public iconSize!: ButtonIconSizeOptions;

  handleClick() {
    if (!this.loading && !this.disabled) {
      this.loading = !this.loading;
      this.buttonOnClick.emit();
    }
  }

  expandButton() {
    return this.expand ? '100%' : '0%';
  }

  ngOnInit() {
    this.iconSize = ButtonIconSizeOptions[this.size];
  }
}
