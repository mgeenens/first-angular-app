import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../model/app.model';
import {CardComponent} from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // SIGNAL approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  //
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
}
