import {Component} from '@angular/core';
import {TodoService} from "./services/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Array<Object> = [];

  constructor(private todoService: TodoService) {
  }

  addTask(taskInput: string) {
    this.todoService.addTask(taskInput);
  }
}
