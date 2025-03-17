import {AfterViewInit, Component, ElementRef, EventEmitter, output, Output, viewChild} from '@angular/core';
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
export class NewTicketComponent implements AfterViewInit {
  titleLabel: string = 'Title';
  textareaLabel: string = 'Request';

  add = output<{ title: string, text: string }>();

  enteredTitle = '';
  enteredText = '';

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private readonly form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngAfterViewInit(): void {
    console.log('After view init');
    console.log(this.form().nativeElement);
  }

  onSubmit() {
    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    // this.form().nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }

}
