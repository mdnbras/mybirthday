import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { PrincipalComponent } from './principal/principal.component';
import { GiftListComponent } from './gift-list/gift-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PrincipalComponent,
    GiftListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
