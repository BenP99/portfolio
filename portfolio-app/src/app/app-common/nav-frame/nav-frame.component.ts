import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-frame',
  templateUrl: './nav-frame.component.html',
  styleUrl: './nav-frame.component.scss'
})
export class NavFrameComponent {
  constructor(private router: Router) {}

  public async scrollAboutMe() {
    await this.router.navigate(['']);
    const element = document.getElementById("footer");
    setTimeout(function () {
      if(element != null) {
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
      }
    }, 100);
  }

  public async home() {
    await this.router.navigate(['']);
    window.scroll(0,0);
  }

  public async projects() {
    await this.router.navigate(['/projects']);
    window.scroll(0,0);
  }

  public async experience() {
    await this.router.navigate(['/experience']);
    window.scroll(0,0);
  }
}