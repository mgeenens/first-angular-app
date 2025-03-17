import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ServerStatusComponent} from './dashboard/server-status/server-status.component';
import {TrafficComponent} from './dashboard/traffic/traffic.component';
import {TicketsComponent} from './dashboard/tickets/tickets.component';
import {DUMMY_TRAFFIC_DATA} from './data/dummy-traffic-data';
import {DashboardItemComponent} from './dashboard/dashboard-item/dashboard-item.component';
import {RectComponent} from './rect/rect.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
    RectComponent,
    FormsModule
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  dummyTrafficData = DUMMY_TRAFFIC_DATA;
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  rectSize = {
    width: 100,
    height: 100
  };

  private readonly interval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.85) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }

}

