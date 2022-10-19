import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { AvatarComponent } from './avatar/avatar.component';


@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
