import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from './button/button.component';
import { AppIconComponent } from './icon/icon.component';
import { TagComponent } from './tag/tag.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SearchComponent,
    TagComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
    AppIconComponent,
    TagComponent,
    InputComponent,
  ],
})

export class ComponentsModule { }