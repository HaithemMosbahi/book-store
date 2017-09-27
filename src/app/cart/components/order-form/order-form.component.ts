import { AppValidators } from './../../../shared/validators/app-validators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import * as cartActions from './../../actions/cart.actions';
import * as fromOrder from './../../reducers/order';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  form: FormGroup;
  identity: FormGroup;
  shipping: FormGroup;
  billing: FormGroup;
  submitted: boolean = false;

  @Output() formSubmitted:EventEmitter<any> = new EventEmitter();


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // we can also add async validators, array of async validator just after the array of sync validator
    this.identity = this.fb.group({
      firstName: '',
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      email: ['',[Validators.required,AppValidators.email('gmail.com')]],
    });

    /*  this.shipping = new FormGroup({
       street: new FormControl(),
       zipCode: new FormControl(),
       city: new FormControl(),
       country: new FormControl(),
 
     }); */

    this.shipping = this.fb.group({
      street: '',
      zipCode: ['', [Validators.required, AppValidators.zidCode]],
      city: ['', Validators.required],
      country: '',

    });

    this.billing = this.fb.group({
      street: '',
      zipCode: ['', [Validators.required, AppValidators.zidCode]],
      city: ['', Validators.required],
      country: '',

    });

    this.form = this.fb.group({
      sameAddress:true,
      identity: this.identity,
      shipping: this.shipping,
      //billing: this.billing
    });

    // pass initial data to the form, setvalue but we must pass all the object structutrue
    // we use patch value to pass partial obj 
    this.form.patchValue({
      identity: {
        firstName: "",
        lastName: ""
      }
    });

  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.submitForm();
    }
  }

  submitForm() {
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.value);
    }
  }

  isDisabled() {
    return this.submitted && this.form.invalid;
  }

  isSubmitted() {
    return this.submitted;
  }

  hasBillingAddress(){
    return !this.form.value.sameAddress;
  }
  updateBilling(){
     if(this.hasBillingAddress()){
       this.form.addControl('billing',this.billing);
     }else{
       this.form.removeControl('billing');
     }
  }
}
