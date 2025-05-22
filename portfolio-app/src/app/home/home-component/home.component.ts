import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public oneTags: string[] = ["HTML", "CSS", "JavaScript", "jQuery", "PHP"];
  public twoTags: string[] = ["Unity", "C#", "Blender", "Photoshop"];

  public openOne: boolean = false;
  public openTwo: boolean = false;

  public moveToFeatured() {
    const element = document.getElementById("featured");
    if(element != null) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

  public openModalOne() {
    this.openOne = true;
  }

  public closeModalOne() {
    this.openOne = false;
  }

  public openModalTwo() {
    this.openTwo = true;
  }

  public closeModalTwo() {
    this.openTwo = false;
  }
}