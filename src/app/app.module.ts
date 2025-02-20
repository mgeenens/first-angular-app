import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HeaderComponent} from './header/header.component';
import {UserInputComponent} from './user-input/user-input.component';
import {FormsModule} from '@angular/forms';
import {InvestmentResultsComponent} from './investment-results/investment-results.component';
import {CommonModule, CurrencyPipe} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ]
})
export class AppModule {
}
