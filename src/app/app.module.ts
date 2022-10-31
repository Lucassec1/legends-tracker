import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { AppIconComponent } from './components/icon/icon.component';
import { SearchComponent } from './components/search/search.component';
import { TabComponent } from './components/tab/tab.component';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ButtonComponent,
    AppIconComponent,
    TagComponent,
    TabGroupComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
