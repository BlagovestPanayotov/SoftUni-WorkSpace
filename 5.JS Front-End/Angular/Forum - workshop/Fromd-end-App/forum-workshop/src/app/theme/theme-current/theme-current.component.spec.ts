import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCurrentComponent } from './theme-current.component';

describe('ThemeCurrentComponent', () => {
  let component: ThemeCurrentComponent;
  let fixture: ComponentFixture<ThemeCurrentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeCurrentComponent]
    });
    fixture = TestBed.createComponent(ThemeCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
