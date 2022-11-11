import { DefaultImageDirective } from './default-image.directive';
import { BadgeComponent } from './badge/badge.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { AppIconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SearchComponent } from './search/search.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabComponent } from './tab/tab.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    AvatarComponent,
    SearchComponent,
    BadgeComponent,
    ButtonComponent,
    AppIconComponent,
    TagComponent,
    TabGroupComponent,
    TabComponent,
    InputComponent,
    CardComponent,
    ProgressBarComponent,
    DividerComponent,
    DefaultImageDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AvatarComponent,
    SearchComponent,
    BadgeComponent,
    ButtonComponent,
    AppIconComponent,
    TagComponent,
    TabGroupComponent,
    TabComponent,
    InputComponent,
    CardComponent,
    ProgressBarComponent,
    DividerComponent,
    DefaultImageDirective,
  ],
})

export class ComponentsModule { }
