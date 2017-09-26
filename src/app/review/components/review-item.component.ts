import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review-item',
  template: `
  <md-grid-list cols="3" rowHeight="2:1">
  <md-grid-tile>
  <ngx-avatar src="https://pbs.twimg.com/profile_images/861878255229554689/bCE4HLNS_bigger.jpg" ></ngx-avatar>  
  </md-grid-tile>
  <md-grid-tile>{{text}} - {{votes}}</md-grid-tile>
  <md-grid-tile>  <a (click)="upVote.emit()"> <i style="cursor: pointer;" class="material-icons">thumb_up</i></a>
  <a (click)="downVote.emit()"> <i style="cursor: pointer;" class="material-icons">thumb_down</i></a>
  <a (click)="removeReview.emit()"> <i style="cursor: pointer;" class="material-icons">close</i></a>       </md-grid-tile>
</md-grid-list>
  
    `,
  styles: [`
      :host{
          display:block;
      }
      div {
          display: inline-block;
          margin-right:25px;
      }
    `]
})

export class ReviewItemComponent implements OnInit {

  @Input() text: string;
  @Input() votes: number;
  @Output() upVote: EventEmitter<any> = new EventEmitter();
  @Output() downVote: EventEmitter<any> = new EventEmitter();
  @Output() removeReview: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() { }
}