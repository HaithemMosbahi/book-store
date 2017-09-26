import { ReviewEffects } from './effects/review.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsContainerComponent } from './containers/reviews-container/reviews-container.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import { ReviewAddComponent } from './components/review-add/review-add.component';
import {reducers} from './reducers';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('bookReview',reducers),
    EffectsModule.forFeature([ReviewEffects])
  ],
  exports:[ReviewsContainerComponent],
  declarations: [ReviewsContainerComponent, ReviewItemComponent, ReviewAddComponent]
})
export class ReviewModule { }
