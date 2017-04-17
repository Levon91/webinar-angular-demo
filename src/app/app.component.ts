import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Array<string> = [];

  addTask(taskInput: string) {
    this.tasks.push(taskInput);
  }
}
