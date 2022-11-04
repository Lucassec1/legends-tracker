import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from './button/button.component';
import { AppIconComponent } from './icon/icon.component';
import { TagComponent } from './tag/tag.component';
import { InputComponent } from './input/input.component';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SearchComponent,
    TagComponent,
    InputComponent,
    AppIconComponent,
    BadgeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
    SearchComponent,
    TagComponent,
    InputComponent,
    AppIconComponent,
    BadgeComponent,
    CardComponent
  ],
})

export class ComponentsModule { }
