import {Component, effect, Input, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host:{
    id:'status'
  }
})
export class ServerStatusComponent {
  @Input({ required: true}) currentStatus!: WritableSignal<'online' | 'offline' | 'unknown'>;

  constructor() {
    // Executes code when signal value changes
    effect(() => {
      console.log(this.currentStatus());
    });
  }
}
