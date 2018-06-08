import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

interface Itodo {
  title: string;
  completed: boolean;
}

const todos = [
  {
    title: 'learn JS',
    completed: true
  },
  {
    title: 'Learn Angular 6',
    completed: false
  },
  {
    title: 'Написать приложение',
    completed: false
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2Do';
  todos = todos;
  newTodoTitle: string = '';

  create() {
      todos.push({title: this.newTodoTitle, completed: false});
  }
  
  toggle(todo: Itodo) {
    todo.completed = !todo.completed;
  }

  delete(todo: Itodo) {
    let index = todos.indexOf(todo);
    if (index > -1) {
      todos.splice(index, 1);
    }
  }
}
