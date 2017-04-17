import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {

  footer = 'Copyright © All rights reserved';

  constructor() { }

  ngOnInit() {
  }

}
