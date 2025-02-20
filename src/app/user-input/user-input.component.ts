import {Component, output} from '@angular/core';
import {InvestmentData} from '../model/app.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  calculate = output<InvestmentData>();

  initialInvestmentInput = '';
  annualInvestmentInput = '';
  expectedReturnInput = '';
  durationInput = '';

  constructor() {
    this.resetDefaultValues();
  }

  onSubmit() {
    const data: InvestmentData = {
      initialInvestment: Number(this.initialInvestmentInput),
      duration: Number(this.durationInput),
      expectedReturn: Number(this.expectedReturnInput),
      annualInvestment: Number(this.annualInvestmentInput)
    }

    console.log(data);
    this.calculate.emit(data);
    this.resetDefaultValues();
  }

  resetDefaultValues() {
    this.initialInvestmentInput = '0';
    this.annualInvestmentInput = '0';
    this.expectedReturnInput = '5';
    this.durationInput = '10';
  }
}
