import { Component, OnInit, Input } from '@angular/core';

type Type = 'progress-bar' | 'info-progress-bar'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() type: Type = 'progress-bar';
  @Input() win: Number = 0;
  @Input() lose: Number = 0;

  public fullWidth = false; 

  winPercent() {
    const percent = (Number(this.win) / (Number(this.win) +  Number(this.lose))) * 100;

    if (percent === 100) {
      this.fullWidth = true;
    }

    return `${percent.toFixed(0)}%`;
  }

  ngOnInit(): void {
  }

}
