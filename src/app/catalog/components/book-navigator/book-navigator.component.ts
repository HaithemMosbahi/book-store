import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-book-navigator',
  templateUrl: './book-navigator.component.html',
  styleUrls: ['./book-navigator.component.css']
})
export class BookNavigatorComponent implements OnInit, OnChanges {

  @Input() current: number;
  @Input() count: number;

  @Output() onNext: EventEmitter<any> = new EventEmitter();
  @Output() onPrevious: EventEmitter<any> = new EventEmitter();

  next: boolean = true;
  previous: boolean = true;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['current']) {
      if (changes['current'].currentValue === 1)
        this.previous = false;
      else if (changes['current'].currentValue > 1) {
        this.previous = true;
        if (changes['current'].currentValue === this.count) {
          this.next = false;
        } else if (changes['current'].currentValue < this.count) {
          this.next = true;
        }

      }

    }
  }


}
