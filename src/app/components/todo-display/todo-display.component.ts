import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'my-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {

  @Input() tasksToDisplay: Array<Object>;

  constructor(private todoService: TodoService) {
    console.log(this.tasksToDisplay);
  }

  ngOnInit() {
    this.tasksToDisplay = this.todoService.getTasks();
  }

  completeTask(index) {
    this.todoService.completeTask(index);
    this.tasksToDisplay = this.todoService.getTasks();
  }

  deleteTask(index) {
    this.todoService.deleteTask(index);
    this.tasksToDisplay = this.todoService.getTasks();
  }

  getCompletedButtonText(task) {
    if (task.isComplete) {
      return 'Redo';
    }
    return 'Complete';
  }
}
