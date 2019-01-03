import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    TodoModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
