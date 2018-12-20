import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services';
import { Todo } from '../models';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: []
})
export class TodoList implements OnInit {
  todos: Todo[] = [];

  constructor(
    private todoService: TodoService 
  ) {}

  ngOnInit() {
    this.todoService.getTodos()
      .then(todos => this.todos = todos);
  }
}