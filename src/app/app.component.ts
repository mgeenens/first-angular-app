import {Component} from '@angular/core';
import {DUMMY_USERS} from './data/dummy-users-data';
import {User} from './model/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    console.log('Selected user with id ' + id);
    this.selectedUserId = id;
  }

}
