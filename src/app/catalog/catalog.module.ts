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
import { BookPageComponent } from './containers/book-page/book-page.component';
import { CatalogPageComponent } from './containers/catalog-page/catalog-page.component';
import { CatalogContainerComponent } from './containers/catalog-container/catalog-container.component';

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
  declarations: [BookPageComponent, CatalogPageComponent, CatalogContainerComponent, BookNavigatorComponent, AddToCartComponent]
})
export class CatalogModule { }
