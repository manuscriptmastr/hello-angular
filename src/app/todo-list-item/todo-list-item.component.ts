import { Component, Input } from '@angular/core';

import { Todo } from '../models';
import { TodoService } from '../services';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html'
})
export class TodoListItem {
  editable: boolean = false;

  @Input('todo') todo: Todo;

  constructor(
    private todoService: TodoService
  ) {}

  toggleTodo() {
    if (this.todo.completed) {
      this.todoService.uncompleteTodo(this.todo.id);
    } else {
      this.todoService.completeTodo(this.todo.id);
    }
  }

  setEditable(isEditable: boolean) {
    this.editable = isEditable;
  }
}