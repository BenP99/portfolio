import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavFrameComponent } from './nav-frame/nav-frame.component';
import { ProjectBoxComponent } from './project-box/project-box.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProjectRowComponent } from './project-row/project-row.component';

@NgModule({
  declarations: [
    NavFrameComponent,
    ProjectBoxComponent,
    ProjectRowComponent,
    ProjectModalComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavFrameComponent,
    ProjectBoxComponent,
    ProjectRowComponent,
    ProjectModalComponent,
    FooterComponent
  ]
})
export class AppCommonModule { }
