import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { DropdownModule } from '../dropdown/dropdown.component.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, DropdownModule],
  exports: [SearchComponent]
})
export class SearchModule {}