import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Task} from '../../model/app.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<Task>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';


  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    const newTask: Task = {
      id: this.generateId(),
      userId: this.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }
    this.add.emit(newTask);
  }

  generateId(): string {
    return new Date().getTime().toString();
  }

}
