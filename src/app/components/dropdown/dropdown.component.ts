import { IconType } from './../icon/icon.component';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Size } from '../core/types/search';

export interface DropdownItem {
  default?: boolean;
  label: string;
  selected?: boolean;
  disabled?: boolean;
  iconType?: IconType;
}

export interface DropdownParams {
  open?: boolean;
  autoclose?: boolean;
  searchFilter?: boolean;
  size?: Size;
  options: DropdownItem[];
  selected: EventEmitter<DropdownItem[]>;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() placeholder?: string;
  @Input() open?: boolean = false;
  @Input() autoClose?: boolean = true;
  @Input() searchFilter?: boolean = false;
  @Input() size?: Size = 'md';
  @Input() options: DropdownItem[] = [];
  @Output() selected = new EventEmitter<DropdownItem[]>();

  // mouseEnter(option: DropdownItem) {
  //   option.selected && !option.disabled && (option.hovered = true);
  // }

  // mouseLeave(option: DropdownItem) {
  //   option.selected && !option.disabled && (option.hovered = false);
  // }

  clearOptions(): void {
    this.options.forEach((item: DropdownItem) => {
      item.selected = false;
    })
  }

  setOpen():void {
    this.open = !this.open;
  }

  select(option: DropdownItem): void {
    if (this.isDisabled(option)) {
      return;
    } else {
      if (this.autoClose) {
        this.setOpen();
      }
      this.clearOptions();
      option.selected = !option.selected;
      this.selected.emit(
        this.options.filter((item: DropdownItem) => item.selected)
      );
    }
  }

  selectedLabel() {
    const selectedOption = this.options.filter((item: DropdownItem) => item.selected);
    const defaultOption = this.options.filter((item: DropdownItem) => item.default);
    
    if (defaultOption.length > 0 && selectedOption.length === 0) {
      return defaultOption[0].label;
    } else if (defaultOption.length === 0 && selectedOption.length === 0) {
      return this.placeholder;
    } else {
      return selectedOption[0].label;
    }
    
  }

  private isDisabled(option: DropdownItem): boolean {
    return option.disabled ? true : false;
  }

  public selectedOption(): boolean { 
    const selected = this.options.filter((item: DropdownItem) => item.selected);
    return selected.length === 0;
  };

  ngOnInit(): void {
    this.options.forEach((item: DropdownItem) => {
      if (item.default) {
        item.selected = true
      }
    })
  }
}
