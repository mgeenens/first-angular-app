import {
  AfterContentInit, afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {

  // @HostBinding('class') className = 'control';
  // @ContentChild('input') private readonly control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private readonly control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  label = input<string>();
  private readonly el = inject(ElementRef);

  constructor() {
    // After any render anywhere in the app
    afterRender(() => {
      console.log('After Render');
    });

    // After the next render anywhere in the app
    afterNextRender(() => {
      console.log('After Next Render');
    });
  }

  ngAfterContentInit(): void {
    console.log('After content init');
    console.log(this.control.name);
  }

  onClick() {
    console.log("Clicked !");
    console.log(this.el);
    console.log(this.control());
  }

}
