import { NgModule } from "@angular/core";
import { ProjectsComponent } from "./projects-component/projects.component";
import { CommonModule } from "@angular/common";
import { AppCommonModule } from "../app-common/app-common.module";

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }