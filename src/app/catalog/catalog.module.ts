import { CatalogListComponent } from './containers/catalog-list.component';
import { CatalogRootComponent } from './containers/catalog-root.component';
import { CatalogItemComponent } from './components/catalog-item.component';
import { ReviewModule } from './../review/review.module';
import { SharedModule } from './../shared/shared.module';
import { CatalogEffects } from './effects/catalog.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CatalogService } from './services/books.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { SelectedBookComponent } from './containers/selected-book.component';

import { reducers } from './reducers';
import { BookNavigatorComponent } from './components/book-navigator/book-navigator.component';
import { AddToCartComponent } from './components/add-to-cart.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CatalogRoutingModule,
    ReviewModule,
    HttpModule,
    StoreModule.forFeature('catalog', reducers),
    EffectsModule.forFeature([CatalogEffects])

  ],
  providers: [CatalogService],
  declarations: [SelectedBookComponent, CatalogListComponent,
    CatalogRootComponent, BookNavigatorComponent,
    AddToCartComponent, CatalogItemComponent]
})
export class CatalogModule { }
