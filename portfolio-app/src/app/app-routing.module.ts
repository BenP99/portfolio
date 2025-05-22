import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home-component/home.component';
import { ProjectsComponent } from './projects/projects-component/projects.component';
import { ExperienceComponent } from './experience/experience-component/experience.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Benjamin Pearce | Portfolio'},
  { path: 'projects', component: ProjectsComponent, title: 'Benjamin Pearce | Projects'},
  { path: 'experience', component: ExperienceComponent, title: 'Benjamin Pearce | Experience'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
