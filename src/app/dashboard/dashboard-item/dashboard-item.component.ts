import {Component, Input} from '@angular/core';
import {ServerStatusComponent} from "../server-status/server-status.component";

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [
  ],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host: {
  //   class:'dashboard-item'
  // }
})
export class DashboardItemComponent {
  @Input({required: true}) imgData!: { src: string; alt: string };
  @Input({required: true}) title !: string;
}
