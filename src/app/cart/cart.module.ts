import { SharedModule } from './../shared/shared.module';
import { CartEmptyComponent } from './components/cart-empty.component';
import { CartContentPageComponent } from './containers/cart-content-page/cart-content-page.component';

import { OrderPageComponent } from './containers/order-page/order-page.component';
import { CheckoutCompletePageComponent } from './containers/checkout-complete-page/checkout-complete-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CartEffetcs } from './effects/cart.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CartRootComponent } from './containers/cart-root/cart-root.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartRowComponent } from './components/cart-row/cart-row.component';
import { reducers } from './reducers';
import { ErrorComponent } from './components/error/error.component';
import { FieldComponent } from './components/field/field.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // Store and effects
    StoreModule.forFeature('cartModule', reducers),
    EffectsModule.forFeature([CartEffetcs])
  ],
  declarations: [CartRootComponent, CartContentPageComponent, OrderPageComponent,
     CartRowComponent, ErrorComponent, FieldComponent,CartEmptyComponent,
     CheckoutCompletePageComponent, OrderFormComponent]
})
export class CartModule { }
