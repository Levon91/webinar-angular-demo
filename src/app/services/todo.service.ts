import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  tasks: Array<Object> = [];

  constructor() {
    this.addTask('task1');
    this.addTask('task2');
    this.addTask('task3');
  }

  getTasks() {
    return this.tasks;
  }

  addTask(taskInput: string) {
    this.tasks.push({
      label: taskInput,
      isComplete: false
    });
  }

  completeTask(index: number) {
    const taskToComplete: any = this.tasks[index];
    taskToComplete.isComplete = !taskToComplete.isComplete;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
