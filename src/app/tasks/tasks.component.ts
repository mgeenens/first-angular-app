import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {Task} from '../model/app.model';
import {NewTaskComponent} from './new-task/new-task.component';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) userName!: string;
  isAddingTask: boolean = false;

  constructor(private readonly tasksService: TasksService) {
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    return this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
