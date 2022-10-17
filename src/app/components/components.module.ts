import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { AppIconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    AppIconComponent
  ],
  exports: [
    ButtonComponent,
    AppIconComponent
  ],
})

export class ComponentsModule { }