import { NgForm, NgControl, FormGroupDirective } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Component, OnInit, Input, ContentChild, Optional } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() label: string;
  @ContentChild(NgModel) ngModel: NgModel;
  @ContentChild(NgControl) ngControl: NgControl;


  get control() {
    return this.ngModel || this.ngControl;
  }

  get form() {
    return this.ngForm || this.formGroupDir;
  }

  // Optional DI
  constructor( @Optional() private ngForm: NgForm,
    @Optional() private formGroupDir: FormGroupDirective) { }

  ngOnInit() {
  }

}
