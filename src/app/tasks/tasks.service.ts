import {Task} from '../model/app.model';
import {DUMMY_TASKS} from '../data/dummy-tasks-data';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TasksService {

  private tasks: Task[] = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(enteredTitle: string, enteredSummary: string, enteredDate: string, userId: string) {

    const newTask: Task = {
      id: this.generateId(),
      userId: '',
      title: enteredTitle,
      summary: enteredSummary,
      dueDate: enteredDate
    }
    newTask.userId = userId;
    this.tasks.unshift(newTask);
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  generateId(): string {
    return new Date().getTime().toString();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
