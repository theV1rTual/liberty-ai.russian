import {Component, ElementRef, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../shared/modals/modal.component";
import {Router} from "@angular/router";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent{

  constructor(private scrollService: ScrollService, public dialog: MatDialog) {}

  scrollToComponent(componentKey: string) {
    this.scrollService.scrollToComponent(componentKey);
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'})
    this.dialog.closeAll();
  }

  navbar =  [
    {name: "Как можно применить?", link: 'component1', url: ''},
    {name: "Наши преимущества", link: 'component2', url: ''},
    {name: "Этапы работы с нами", link: 'component3', url: ''},
    {name: "F.A.Q.", link: 'component4', url: ''},
    {name: "Блог", link: 'blog', url: 'blog'},
  ]

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
