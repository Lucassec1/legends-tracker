import { DirectionType } from './../core/types/direction';
import { Component, OnInit, Input } from '@angular/core';

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
