import { Component, Input } from '@angular/core';

export type TabSize = 'sm' | 'md' | 'lg';
type BorderDirection = 'bottom' | 'top' | 'right' | 'left';

export interface AppTabProps {
  label: string; 
  tabSize?: TabSize;
  selected?: boolean;
  disabled?: boolean; 
  borderDirection?: BorderDirection;
}

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})

export class TabComponent {
  @Input() label!: String;
  @Input() tabSize?: TabSize = 'md';
  @Input() selected? = false;
  @Input() disabled? = false;
  @Input() borderDirection?: BorderDirection = 'bottom';

  public select() {
    this.selected = true;
  }
}
