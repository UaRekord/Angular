import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor(public todoService: TodoService) {
    this.todos = [];
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
    }

  toggle(todo: Todo) {
   this.todoService.toggleTodo(todo);
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

}
