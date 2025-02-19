import {Component, input} from '@angular/core';
import {InvestmentResult} from '../model/app.model';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {
 results? = input<InvestmentResult[]>();
}
