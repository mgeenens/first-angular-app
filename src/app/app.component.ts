import { Component } from '@angular/core';
import {InvestmentData, InvestmentResult} from './model/app.model';
import {InvestmentResultService} from './service/investment-result.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private readonly investmentResultService: InvestmentResultService) {
  }

  onCalculate(data: InvestmentData): InvestmentResult[] {
    return this.investmentResultService.calculateInvestmentResults(data)
  }
}
