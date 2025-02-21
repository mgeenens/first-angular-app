import {Component, ElementRef, HostBinding, inject, input, ViewEncapsulation} from '@angular/core';

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

  label = input<string>();
  private readonly el = inject(ElementRef);

  onClick() {
    console.log("Clicked !");
    console.log(this.el);
  }

}
