import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tab-group.component';
import { TabModule } from '../tab/tab.component.module';

@NgModule({
  declarations: [TabGroupComponent],
  imports: [CommonModule, TabModule],
  exports: [TabGroupComponent]
})
export class TabGroupModule {}