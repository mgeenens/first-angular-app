import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Task} from '../../model/app.model';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();
  private readonly tasksService = inject(TasksService);

  onCompleteTask() {
    return this.tasksService.removeTask(this.task.id);
  }
}
