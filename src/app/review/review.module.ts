import { MomentModule } from 'angular2-moment';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule } from '@angular/forms';
import { ReviewEffects } from './effects/review.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsContainerComponent } from './containers/reviews-container/reviews-container.component';
import { ReviewItemComponent } from './components/review-item.component';
import { AddReviewComponent } from './components/add-review.component';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AvatarModule,
    StoreModule.forFeature('bookReview', reducers),
    EffectsModule.forFeature([ReviewEffects]),
    MomentModule
  ],
  exports: [ReviewsContainerComponent],
  declarations: [ReviewsContainerComponent, ReviewItemComponent, AddReviewComponent]
})
export class ReviewModule { }
