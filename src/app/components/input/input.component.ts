import { Component, Input } from '@angular/core';

type Type = 'user' | 'text' | 'password' | 'email' ;
type Size = 'sm' | 'md' ;

export interface AppInputProps {
  placeholder?: string;
  type?: Type;
  size?: Size; 
  visible?: boolean;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent  {
  @Input() placeholder?: string = '';
  @Input() type?: Type = 'text';
  @Input() size?: Size = 'md';
  @Input() visible? = false;

  passwordInput() {
    this.visible = !this.visible;
  }
}