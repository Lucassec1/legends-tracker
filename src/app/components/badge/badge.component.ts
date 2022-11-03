import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BadgeDirectionType } from '../core/types/badge';

type Size = 'sm' | 'md';
type Type = 'notification' | 'level';
export interface AppBadgeProps {
  value: number;
  type?: Type;
  size?: Size;
  direction?: BadgeDirectionType;
}

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnChanges, OnInit {
  @Input() value!: number;
  @Input() type: Type = 'notification';
  @Input() size?: Size = 'md';
  @Input() direction?: BadgeDirectionType = 'bottom-right';

  valueInBadge!: string;

  ngOnInit(): void {
    this.valueInBadge = this.formatValue();
  }

  ngOnChanges(): void {
    this.valueInBadge = this.formatValue();
  }

  formatValue(): string {
    const newValue = this.exists(this.value) ? this.limitValue(this.value) : '';
    return this.type === 'notification' ? newValue : this.value.toString();
  }

  private exists(value: number): boolean {
    return value !== null && !isNaN(value);
  }

  private limitValue(value: number): string {
    const maxValue = 99;
    if (value > maxValue) {
      return `${maxValue}+`;
    }
    return value.toString();
  }
}