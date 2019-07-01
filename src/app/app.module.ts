import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TodoModule } from './todo.module';

import { AppComponent } from './app.component';
import { TodoService } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    TodoModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
