import { PositionIconOptions, Label } from './../core/types/tag';
// import { IconType } from './../icon/icon.component';
import { Component, OnInit, Input } from '@angular/core';

export interface TagProps {
  label: Label;
  icon?: boolean;
  iconType?: PositionIconOptions;
}

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() public label!: Label;
  @Input() public icon? = true;

  public iconType!: PositionIconOptions;

  constructor() { }

  ngOnInit(): void {
    this.iconType = PositionIconOptions[this.label];
  }

}
