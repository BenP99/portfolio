import { Component } from "@angular/core";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public oneTags: string[] = ["HTML", "CSS", "JavaScript", "jQuery", "PHP"];
  public twoTags: string[] = ["Unity", "C#", "Blender", "Photoshop"];
  public threeTags: string[] = ["Unity", "C#", "Blender"];
  public fourTags: string[] = ["Unity", "C#", "Photoshop"];
  public fiveTags: string[] = ["Android Studio", "C#", "Photoshop"];
  public sixTags: string[] = ["Eclipse", "Java"];
  public sevenTags: string[] = ["HTML", "CSS", "JavaScript", "PHP"];

  public openOne: boolean = false;
  public openTwo: boolean = false;
  public openThree: boolean = false;
  public openFour: boolean = false;
  public openFive: boolean = false;
  public openSix: boolean = false;
  public openSeven: boolean = false;

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

  public openModalThree() {
    this.openThree = true;
  }

  public closeModalThree() {
    this.openThree = false;
  }

  public openModalFour() {
    this.openFour = true;
  }

  public closeModalFour() {
    this.openFour = false;
  }

  public openModalFive() {
    this.openFive = true;
  }

  public closeModalFive() {
    this.openFive = false;
  }

  public openModalSix() {
    this.openSix = true;
  }

  public closeModalSix() {
    this.openSix = false;
  }

  public openModalSeven() {
    this.openSeven = true;
  }

  public closeModalSeven() {
    this.openSeven = false;
  }
}