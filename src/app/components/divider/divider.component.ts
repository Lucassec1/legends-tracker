import { Component, OnInit, Input } from '@angular/core';
import { DirectionType } from './../core/types/direction';

export interface DividerProps {
  direction?: DirectionType,
}

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Input() direction?: DirectionType = 'horizontal';

  ngOnInit(): void {
  }
}
