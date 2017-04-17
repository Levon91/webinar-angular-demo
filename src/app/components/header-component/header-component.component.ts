import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  title=  'TODO application';
  constructor() {
    // this.title = title;
  }

  ngOnInit() {
  }

}
