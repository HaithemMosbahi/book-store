import { FooterComponent } from './components/footer.component';
import { SharedModule } from './../shared/shared.module';
import { FirebaseService } from './services/firebase.service';
import { BooksService } from './services/books.service';
import { CartService } from './services/cart.service';
import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu.component';
import { LogoComponent } from "./components/logo.component";
import { CartComponent } from "./components/cart.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [MenuComponent,LogoComponent,CartComponent,FooterComponent],
  exports: [MenuComponent,LogoComponent,CartComponent,FooterComponent]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [CartService, BooksService, FirebaseService]
    }
  }
}
