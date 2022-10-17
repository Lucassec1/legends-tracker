import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from './button/button.component';
import { AppIconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SearchComponent,
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