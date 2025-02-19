import { Component } from '@angular/core';
import {InvestmentData, InvestmentResult} from './model/app.model';
import {InvestmentResultService} from './service/investment-result.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  resultsData?: InvestmentResult[];

  constructor(private readonly investmentResultService: InvestmentResultService) {
  }

  onCalculate(data: InvestmentData) {
    this.resultsData = this.investmentResultService.calculateInvestmentResults(data);
  }
}
