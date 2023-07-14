import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThemeRoutingModule } from './theme-routhing.module';
import { ThemeCurrentComponent } from './theme-current/theme-current.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ThemeCommentComponent } from './theme-comment/theme-comment.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddThemeComponent,
    ThemeCurrentComponent,
    ThemeCommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemeRoutingModule,
    SharedModule
  ]
})
export class ThemeModule { }
