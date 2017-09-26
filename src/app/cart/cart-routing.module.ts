import { CartContentPageComponent } from './containers/cart-content-page/cart-content-page.component';

import { OrderPageComponent } from './containers/order-page/order-page.component';
import { CheckoutCompletePageComponent } from './containers/checkout-complete-page/checkout-complete-page.component';

import { CartRootComponent } from './containers/cart-root/cart-root.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CartRootComponent,
    children: [
      { path: 'content', component: CartContentPageComponent },
      { path: 'order', component: OrderPageComponent },
      { path: 'complete', component: CheckoutCompletePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
