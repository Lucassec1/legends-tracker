import { Component, OnInit, Input } from '@angular/core';

type Size = 'sm' | 'md' | 'lg';
type Border = 'bottom' | 'left' | 'right';

export interface AppTabGroupProps {
  size?: Size;
  border?: Border;
  selected?: boolean;
}

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})

export class TabGroupComponent implements OnInit {
  @Input() size?: Size = 'md';
  @Input() border?: Border = 'bottom';
  @Input() selected? = false;

  constructor() { }

  ngOnInit(): void {
  }

}
