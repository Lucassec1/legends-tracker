import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from './button/button.component';
import { AppIconComponent } from './icon/icon.component';
import { TagComponent } from './tag/tag.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SearchComponent,
    TagComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    AppIconComponent
  ],
  exports: [
    ButtonComponent,
    AppIconComponent,
  ],
})

export class ComponentsModule { }