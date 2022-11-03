import { Component, OnInit, Input, OnChanges } from '@angular/core';

type Type = 'primary';
export interface BadgeProps {
  value?: number;
  type: Type;
}

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})

export class BadgeComponent implements OnChanges, OnInit {
  @Input() value?: number;
  @Input() type: Type = 'primary';

  valueInBadge?: string;

  ngOnInit(): void {
    this.valueInBadge = this.formatValue();
  }

  ngOnChanges(): void {
    this.valueInBadge = this.formatValue();   
  }

  formatValue(): string {
    return this.exists(this.value) ? this.limitValue(this.value) : '';
  }

  private exists(value: number): boolean {
    return value !== null && !isNaN(value);
  }

  private limitValue(value: number): string {
    const maxValue = 99;
    if (value > maxValue) {
      return `${maxValue}+`;
    }
    return value && value.toString();  
  }
}