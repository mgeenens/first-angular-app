import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private readonly tasksService = inject(TasksService);


  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(this.enteredTitle, this.enteredSummary, this.enteredDate, this.userId);
    this.close.emit();
  }

}
