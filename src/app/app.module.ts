import { ComponentsModule } from './components/components.module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { AppIconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { SearchComponent } from './components/search/search.component';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ButtonComponent,
    AppIconComponent,
    TagComponent,
    InputComponent,
    CardComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }