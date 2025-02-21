import {Component, Input} from '@angular/core';
import {TrafficData} from '../../model/traffic.model';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
  host:{
    id:'traffic'
  }
})
export class TrafficComponent {
  @Input({ required: true}) dummyTrafficData!: TrafficData[];
  @Input({ required: true}) maxTraffic!: number;
}
