import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrl: './project-box.component.scss'
})
export class ProjectBoxComponent {
    @Input() public title: string = "";
    @Input() public description: string = "";
    @Input() public imgSrc: string = "";
    @Input() public imgAlt: string = "";
    @Input() public tags: string[] = [];

    @Output() openModal = new EventEmitter<void>();

    public open() {
        this.openModal.emit();
    }
}