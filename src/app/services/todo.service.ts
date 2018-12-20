import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json());
  }
}