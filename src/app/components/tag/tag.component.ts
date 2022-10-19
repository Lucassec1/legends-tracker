import { PositionIconOptions } from './../core/types/tag';
import { IconType } from './../icon/icon.component';
import { Component, OnInit, Input } from '@angular/core';

type label = 'adc' | 'jungle' | 'mid' | 'suporte' | 'top';

export interface TagProps {
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() public label!: label;
  @Input() public icon: boolean = true;

  public iconUrl!: PositionIconOptions;

  constructor() { }

  ngOnInit(): void {
    this.iconUrl = PositionIconOptions[this.label];
  }

}
