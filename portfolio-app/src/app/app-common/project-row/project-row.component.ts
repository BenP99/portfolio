import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-project-row',
  templateUrl: './project-row.component.html',
  styleUrl: './project-row.component.scss'
})
export class ProjectRowComponent {
    @Input() public title: string = "";
    @Input() public description: string = "";

    @Output() openModal = new EventEmitter<void>();

    public open() {
        this.openModal.emit();
    }
}