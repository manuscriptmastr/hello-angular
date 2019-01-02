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
  completedTodos: Todo[] = [];
  uncompletedTodos: Todo[] = [];

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit() {
    const allTodos = this.todoService.get();
    allTodos.subscribe(todos => this.todos = todos);
    allTodos.subscribe(todos =>
      this.completedTodos = todos.filter(t => t.completed)
    );
    allTodos.subscribe(todos =>
      this.uncompletedTodos = todos.filter(t => !t.completed)
    )
  }
}