import { NgForm, NgControl } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() control:NgControl;
  @Input() form:NgForm;

  constructor() { }

  ngOnInit() {
  }

}
