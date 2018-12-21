import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoList } from './todo-list/todo-list.component';
import { TodoListItem } from './todo-list-item/todo-list-item.component';
import { TodoService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    TodoList,
    TodoListItem
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
