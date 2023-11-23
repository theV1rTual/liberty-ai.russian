import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {ScrollService} from "../../services/scroll.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../shared/modals/modal.component";

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html'
})

export class SolutionsComponent implements OnInit {
  constructor(private scrollService: ScrollService, private el: ElementRef, private dialog: MatDialog) {}

  openModal() {
    this.dialog.open(ModalComponent)
  }

  ngOnInit() {
    this.scrollService.setScrollFunction('component1', () => this.scrollToComponent());
  }

  scrollToComponent() {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block : 'center'});
  }

  leftSolutions = [
    {
      image: 'assets/images/solutions1.svg',
      text: 'Контроль Качества и NPS'
    },
    {
      image: 'assets/images/solutions2.svg',
      text: 'Вовлечение по Программе Лояльности'
    },
    {
      image: 'assets/images/solutions3.svg',
      text: 'Напоминание о Брошенной Корзине'
    },
    {
      image: 'assets/images/solutions4.svg',
      text: 'Поздравления с днем Рождения'
    }
  ]
  rightSolutios = [
    {
      image: 'assets/images/solutions6.svg',
      text: 'Информирование об акциях/ распродажах'
    },
    {
      image: 'assets/images/application1.svg',
      text: 'Обработка Входящих Звонков/ Заявок'
    },
    {
      image: 'assets/images/application2.svg',
      text: 'Предупреждения о Сгорающих Бонусах'
    },
    {
      image: 'assets/images/solutions8.svg',
      text: 'Звонок по Выезду Курьера/ о Доставленном Заказе'
    }
  ]
}

