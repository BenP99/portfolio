import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    public get getCurrentYear() {
        return (new Date()).getFullYear();
    }
}