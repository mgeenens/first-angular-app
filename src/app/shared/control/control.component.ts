import {Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation} from '@angular/core';

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
export class ControlComponent {

  // @HostBinding('class') className = 'control';
  // @ContentChild('input') private readonly control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private readonly control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  label = input<string>();
  private readonly el = inject(ElementRef);

  onClick() {
    console.log("Clicked !");
    console.log(this.el);
    console.log(this.control());
  }

}
