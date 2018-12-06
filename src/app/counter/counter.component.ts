import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count: number;
  backgroundColor: string = 'greenyellow';

  constructor(
    public counterService: CounterService
  ) { }

  ngOnInit() {
    this.count = this.counterService.count;
  }
}
