import {Component, Input} from '@angular/core';

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
  @Input({ required: true}) currentStatus!: string;
}
