import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../todo-list-item/todo-list-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  toDosArr: Array<string> = ['dasd', 'dasda', 'asdasd'];
  toDos: Array<TodoListItem> = [];
  constructor() {}

  ngOnInit() {
    this.toDos = this.toDosArr.map((e) => new TodoListItem(e));
  }
}
