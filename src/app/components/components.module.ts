import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from './button/button.component';
import { AppIconComponent } from './icon/icon.component';
import { TagComponent } from './tag/tag.component';
@NgModule({
  declarations: [
    ButtonComponent,
    SearchComponent,
    TagComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
  ],
})

export class ComponentsModule { }