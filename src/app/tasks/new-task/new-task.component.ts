import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }

}
