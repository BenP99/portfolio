import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';
import { ExperienceComponent } from './experience-component/experience.component';

@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }