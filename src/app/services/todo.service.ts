import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Observable<Todo[]>;

  constructor(
    private http: HttpClient
  ) {}

  get() {
    if (this.todos) {
      return this.todos;
    } else {
      const newTodos: Observable<Todo[]> = this.http.get('https://jsonplaceholder.typicode.com/todos');
      this.todos = newTodos;
      return newTodos;
    }
  }
}