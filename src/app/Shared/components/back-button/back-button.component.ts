import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  @Input('label') label: string;

  constructor() {}

  ngOnInit() {}

  back() {
    window.history.back();
  }
}
