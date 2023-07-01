import { Component, Input } from '@angular/core';
import { TodoListItem } from './todo-list-item.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent extends TodoListItem {
  @Input() toDos: Array<TodoListItem> = [];

  constructor() {
    super('');
  }

  onDelete(e:TodoListItem): void {
    const i = this.toDos.indexOf(e);
    this.toDos.splice(i,1);
  }

  addElement(e:string){
    this.toDos.push(new TodoListItem(e));
  }
}
