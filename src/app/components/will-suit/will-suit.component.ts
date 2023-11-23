import {Component} from "@angular/core";

@Component({
  selector: 'app-will-suit',
  templateUrl: './will-suit.component.html'
})

export class WillSuitComponent {
  categories = [
    {name: 'Неотличим от реального человека', active: false},
    {name: 'Омниканальность', active: false},
    {name: 'Экспертность в работе с Ретейлом', active: false},
    {name: 'Гибридный синтез речи', active: false},
    {name: 'Сегментация базы данных', active: false},
    {name: 'No-code платформа', active: false},
    {name: 'Интеграция с любой CRM системой', active: false},
    {name: 'Качественное распознавание речи', active: false},
    {name: 'Возможность работы он премис/он клауд', active: false},
    {name: 'Глубокое погружение в ваш процесс', active: false},
  ]
}
