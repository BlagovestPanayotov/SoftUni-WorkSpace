import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { AppEmailDirective } from './validators/app-email.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeComponent,
    AppEmailDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LoaderComponent,
    WelcomeComponent,
    AppEmailDirective
  ]
})
export class SharedModule { }
