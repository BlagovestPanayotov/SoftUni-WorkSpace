import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoPopupComponent } from './todo-popup/todo-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoPopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
