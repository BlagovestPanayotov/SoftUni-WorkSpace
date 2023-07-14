import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { MainComponent } from '../main/main.component';
import { ThemeCurrentComponent } from './theme-current/theme-current.component';
import { AuthActive } from '../core/guards/auth.acative';

const routes: Routes = [
  {
    path: 'themes',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
      },
      {
        path: ':themeId',
        component: ThemeCurrentComponent,
      },
    ],
  },
  {
    path: 'add-theme',
    component: AddThemeComponent,
    canActivate: [AuthActive],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
