import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { AuthActive } from '../core/guards/auth.acative';
import { AuthNotActive } from '../core/guards/auth.not-active';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthNotActive],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthNotActive],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthActive],
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
