import { Component, OnInit  } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  title = '';
  constructor(private todoservice: TodoService) { }

  onSubmit() {
    this.todoservice.createTodo(this.title);
  }

  ngOnInit() {
  }

}
