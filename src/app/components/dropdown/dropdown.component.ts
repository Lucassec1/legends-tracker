import { IconType } from './../icon/icon.component';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

export interface DropdownItem {
  label: String;
  selected?: Boolean;
  disabled: boolean;
  hovered?: Boolean;
  iconType?: IconType;
}

export interface DropdownParams {
  options: DropdownItem[];
  selected: EventEmitter<DropdownItem[]>;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() icons: Boolean = false;  
  @Input() options: DropdownItem[] = [];
  @Output() selected = new EventEmitter<DropdownItem[]>();

  public open: Boolean = true;

  mouseEnter(option: DropdownItem) {
    option.selected && !option.disabled && (option.hovered = true);
  }

  mouseLeave(option: DropdownItem) {
    option.selected && !option.disabled && (option.hovered = false);
  }

  setOpen():void {
    this.open = !this.open;
  }

  select(option: DropdownItem): void {
    if (this.isDisabled(option)) {
      return;
    }
    option.selected = !option.selected;
    this.selected.emit(
      this.options.filter((item: DropdownItem) => item.selected)
    );
  }

  private isDisabled(option: DropdownItem): boolean {
    return option.disabled;
  }
}
