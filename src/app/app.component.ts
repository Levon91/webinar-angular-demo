import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Array<Object> = [];

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
