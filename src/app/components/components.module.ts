import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';


@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
