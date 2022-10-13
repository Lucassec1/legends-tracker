import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ButtonComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
