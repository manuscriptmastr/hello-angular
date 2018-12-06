import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count: number = 0;
  backgroundColor: string = 'greenyellow';

  ngOnInit() {
  }

  decrementCount() {
    this.count = this.count < 1 ? 0 : this.count - 1;
  }
  
  incrementCount() {
    this.count++;
  }

  resetCount() {
    this.count = 0;
  }

}
