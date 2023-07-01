import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPopupComponent } from './todo-popup.component';

describe('TodoPopupComponent', () => {
  let component: TodoPopupComponent;
  let fixture: ComponentFixture<TodoPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoPopupComponent]
    });
    fixture = TestBed.createComponent(TodoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
