import {Component, ElementRef} from "@angular/core";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-system-tools',
  templateUrl: './system-tools.component.html'
})

export class SystemToolsComponent {
  constructor(private scrollService: ScrollService, private el: ElementRef) {}

  ngOnInit() {
    this.scrollService.setScrollFunction('component6', () => this.scrollToComponent());
  }

  scrollToComponent() {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth' , block : 'center' });
  }

  tools = [
    {
      image: 'assets/images/tools1.svg',
      title: 'Текстовые роботы',
      text: 'Для вашего сценария настраиваются роботы, которые неотличимы от менеджеров и могут коммуницировать с клиентом в одном из популярных мессенджерах'
    },
    {
      image: 'assets/images/tools2.svg',
      title: 'Голосовые роботы',
      text: 'Автоматическая обработка звонков, идентичных реальному голосу и поведению человека, стоимостью в 10 раз дешевле живых менеджеров'
    },
    {
      image: 'assets/images/tools3.svg',
      title: 'Колл-Центр',
      text: 'Настройка входящих и исходящих звонков для живой обработки, сокращение простоя и настройка маршрутизации'
    },
  ]

  options = [
    {
      name: 'Retail',
      active: true
    }
  ]
}
