import {Component, output} from '@angular/core';
import {InvestmentData} from '../model/app.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  calculate = output<InvestmentData>();

  initialInvestmentInput = '0';
  annualInvestmentInput = '0';
  expectedReturnInput = '5';
  durationInput = '10';

  onSubmit() {
    const data: InvestmentData = {
      initialInvestment: Number(this.initialInvestmentInput),
      duration: Number(this.durationInput),
      expectedReturn: Number(this.expectedReturnInput),
      annualInvestment: Number(this.annualInvestmentInput)
    }

    console.log(data);
    this.calculate.emit(data);
  }
}
