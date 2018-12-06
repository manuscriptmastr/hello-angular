import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count: number = 0;
  decrement() {
    this.count = this.count < 1 ? 0 : this.count - 1;
  }
  increment() {
    this.count++;
  }
  reset() {
    this.count = 0;
  }
}
