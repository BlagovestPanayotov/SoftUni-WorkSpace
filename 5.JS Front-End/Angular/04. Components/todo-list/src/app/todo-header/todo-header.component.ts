import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
})
export class TodoHeaderComponent {
  inputValue: string = '';

  keyup(event: any) {
    this.inputValue = event.target.value;
  }

  addNewToDo() {
    if (this.inputValue !== '') {
      console.log(this.inputValue);

      // newToDo = document.createElement('li');
      // newToDo.textContent = toDoInput.value;
      // createToolAreal();
      // ulList.append(newToDo);
      // toDoInput.value = '';
      // errorInfo.textContent = '';
    } else {
      // errorInfo.textContent = 'Wpisz treść zadania!';
      console.log('eror');
    }
  }
}
