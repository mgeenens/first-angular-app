import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HeaderComponent} from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule
  ],
  exports: [
    AppComponent,
    HeaderComponent
  ]
})
export class AppModule {
}
