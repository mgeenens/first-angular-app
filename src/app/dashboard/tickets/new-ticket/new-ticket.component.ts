import {Component, ElementRef, viewChild} from '@angular/core';
import {ButtonComponent} from '../../../shared/button/button.component';
import {ControlComponent} from '../../../shared/control/control.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  titleLabel: string = 'Title';
  textareaLabel: string = 'Request';

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private readonly form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(title: string, text: string) {
    console.log("ENTERED TITLE :" + title);
    console.log("ENTERED TEXT :" + text);
    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
  }

}
