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
    {name: "Application Areas", link: 'component1', url: ''},
    {name: "Key Benefits", link: 'component2', url: ''},
    {name: "Getting Started", link: 'component3', url: ''},
    {name: "F.A.Q.", link: 'component4', url: ''},
    {name: "Blog", link: 'blog', url: 'blog'},
  ]

  close(link: string) {
    this.isSidebarOpen = false
    this.scrollToComponent(link)
  }

}
