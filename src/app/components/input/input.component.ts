import { Component, Input, OnInit } from '@angular/core';

type Type = 'text' | 'password';
type Size = 'sm' | 'md' ;

export interface AppInputProps {
  placeholder?: string;
  type?: Type;
  size?: Size; 
  expand?: boolean;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() placeholder?: string = '';
  @Input() type?: Type = 'text';
  @Input() size?: Size = 'md';
  @Input() expand? = false;

  expandInput() {
    return this.expand ? '100%' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }
}
