import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'my-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Output() textInputed = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  inputTask(taskInput: HTMLInputElement) {
    this.textInputed.emit(taskInput.value);
    taskInput.value = '';
  }
}
