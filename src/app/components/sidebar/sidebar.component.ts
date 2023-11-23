import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent {
  @Input() isSidebarOpen!: boolean;
  @Output() toggle = new EventEmitter<void>();

  constructor(private scrollService: ScrollService) {}

  scrollToComponent(componentKey: string) {
    this.scrollService.scrollToComponent(componentKey);
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.toggle.emit();
  }

  navbar =  [
    {name: "Где чаще всего используют?", link: 'component1', url: ''},
    {name: "Наши преимущества", link: 'component2', url: ''},
    {name: "Этапы работы с нами", link: 'component3', url: ''},
    {name: "F.A.Q.", link: 'component4', url: ''},
    {name: "Блог", link: 'blog', url: 'blog'},
  ]

  close(link: string) {
    this.isSidebarOpen = false
    this.scrollToComponent(link)
  }

}
