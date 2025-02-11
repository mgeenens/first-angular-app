import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {DUMMY_TASKS} from '../data/dummy-tasks-data';
import {Task} from '../model/app.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) userName!: string;
  tasks: Task[] = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

}
