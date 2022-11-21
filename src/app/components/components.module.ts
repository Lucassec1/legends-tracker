import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonModule } from './button/button.component.module';
import { CardModule } from './card/card.component.module';
import { DefaultImageDirective } from './default-image.directive';
import { DividerModule } from './divider/divider.component.module';
import { DropdownModule } from './dropdown/dropdown.component.module';
import { IconModule } from './icon/icon.component.module';
import { InputModule } from './input/input.component.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SearchModule } from './search/search.component.module';
import { TabModule } from './tab/tab.component.module';
import { TabGroupModule } from './tab-group/tab-group.component.module';
import { TagModule } from './tag/tag.component.module';

@NgModule({
  declarations: [
    AvatarComponent,
    BadgeComponent,
    ProgressBarComponent,
    DefaultImageDirective
  ],
  imports: [CommonModule],
  exports: [
    AvatarComponent,
    BadgeComponent,
    ProgressBarComponent,
    CommonModule,
    ButtonModule,
    CardModule,
    DividerModule,
    DropdownModule,
    IconModule,
    InputModule,
    SearchModule,
    TabModule,
    TabGroupModule,
    TagModule,
    DefaultImageDirective
  ],
})

export class ComponentsModule {}