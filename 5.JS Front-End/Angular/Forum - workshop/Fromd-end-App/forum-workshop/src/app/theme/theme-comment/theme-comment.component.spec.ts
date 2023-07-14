import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCommentComponent } from './theme-comment.component';

describe('ThemeCommentComponent', () => {
  let component: ThemeCommentComponent;
  let fixture: ComponentFixture<ThemeCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeCommentComponent]
    });
    fixture = TestBed.createComponent(ThemeCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
