import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from './button/button.component';
import { AppIconComponent } from './icon/icon.component';
import { TagComponent } from './tag/tag.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SearchComponent,
    TagComponent,
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