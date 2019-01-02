import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: BehaviorSubject<Todo[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.http.get<[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(todos => this.todos.next(todos));
  }

  completeTodo(id: number) {
    const newTodos = this.todos.value
      .map(t => t.id !== id ? t : ({ ...t, completed: true }));
    this.todos.next(newTodos);
  }

  uncompleteTodo(id: number) {
    const newTodos = this.todos.value
      .map(t => t.id !== id ? t : ({ ...t, completed: false }));
    this.todos.next(newTodos);
  }
}