import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LoaderComponent,
    WelcomeComponent
  ]
})
export class SharedModule { }
