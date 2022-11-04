import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppTabProps, TabSize } from '../tab/tab.component';
import { DirectionType, BorderDirectionType } from '../core/types/direction';

export interface TabGroup extends AppTabProps {
  selected: boolean;
}

export interface AppTabGroupProps {
  tabs: TabGroup[];
  border?: BorderDirectionType;
  direction: DirectionType;
  size?: TabSize;
  selected: EventEmitter<TabGroup>;
}

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})

export class TabGroupComponent implements OnInit {
  @Input() tabs: TabGroup[] = [];
  @Input() direction: DirectionType = 'horizontal';
  @Input() border?: BorderDirectionType;
  @Input() size: TabSize = 'md';
  @Output() selected = new EventEmitter<TabGroup>();

  private getBorderByDirection(direction: DirectionType): BorderDirectionType {
    const directions = {
      horizontal: 'bottom',
      vertical: 'right',
    };

    if (this.border) {
      return this.border;
    }

    return directions[direction] as BorderDirectionType;
  }

  private clearTabs() {
    this.tabs.forEach((tab) => {
      tab.selected = false;
    });
  }

  public selectTab(tabSelected: TabGroup) {
    this.clearTabs();
    tabSelected.selected = true;
    this.selected.emit(tabSelected);
  }

  ngOnInit(): void {
    this.border = this.getBorderByDirection(this.direction);
  }
}