import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
    @Input() public title: string = "";
    @Input() public description: string = "";
    @Input() public imgSrc: string = "";
    @Input() public imgAlt: string = "";
    @Input() public videoSrc?: string = "";
    @Input() public tags: string[] = [];

    @Input() public linkBtn: boolean = false;
    @Input() public linkBtnLabel: string = "";
    @Input() public linkBtnHref: string = "";

    @Output() closeModal = new EventEmitter<void>();

    public close() {
        this.closeModal.emit();
    }
}