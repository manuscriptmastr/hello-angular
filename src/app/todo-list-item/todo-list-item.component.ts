import { Component, Input } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html'
})
export class TodoListItem {
  @Input('todo') todo: Todo;
}