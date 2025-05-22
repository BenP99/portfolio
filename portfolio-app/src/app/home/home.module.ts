import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-component/home.component';
import { AppCommonModule } from '../app-common/app-common.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }