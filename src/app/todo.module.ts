import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoList } from './todo-list/todo-list.component';
import { TodoListItem } from './todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    TodoList,
    TodoListItem
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoList
  ]
})
export class TodoModule {}