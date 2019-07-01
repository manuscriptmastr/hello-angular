import { Component, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

const wait = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatTooltip) _tooltip: MatTooltip;
}
