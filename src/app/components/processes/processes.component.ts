import {Component, ElementRef} from "@angular/core";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html'
})

export class ProcessesComponent {

  constructor(private scrollService: ScrollService, private el: ElementRef) {}

  ngOnInit() {
    this.scrollService.setScrollFunction('component2', () => this.scrollToComponent());
  }

  scrollToComponent() {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block : 'center' });
  }

  processes = [
    {
      title: 'Реактивация',
      description: 'Конверсия х3',
      text: 'Повторное привлечение клиентов, не совершавших покупок в течение длительного времени, с помощью роботов, работающих на основе Искусственного Интеллекта и неотличимых от людей.'
    },
    {
      title: 'Удержание клиентов',
      description: '94% повторных покупок ',
      text: 'Обеспечение бесперебойной, персонализированной, многоканальной коммуникации для поддержания высокого уровня удержания клиентов.'
    },
    {
      title: 'Контроль качества и NPS',
      description: 'В течение 30 минут',
      text: 'Быстрый и эффективный сбор отзывов для улучшения качества услуг и поддержания высокого уровня качества.'
    }
  ]
}
