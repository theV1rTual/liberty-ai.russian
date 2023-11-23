import {Component, ElementRef} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../shared/modals/modal.component";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-start-work',
  templateUrl: './start-work.component.html'
})

export class StartWorkComponent {
  constructor(private dialog: MatDialog, private scrollService: ScrollService, private el: ElementRef) {
  }


  ngOnInit() {
    this.scrollService.setScrollFunction('component3', () => this.scrollToComponent());
  }

  scrollToComponent() {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block : 'center' });
  }

  openModal() {
    this.dialog.open(ModalComponent)
  }
}
