import {Component, model} from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css'
})
export class RectComponent {

  size = model.required<{ width: number; height: number }>();

  onReset() {
    this.size.set({
      width: 200,
      height: 100,
    })
  }
}
