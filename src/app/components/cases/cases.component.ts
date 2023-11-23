import {Component} from "@angular/core";
import {ModalComponent} from "../../shared/modals/modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html'
})

export class CasesComponent {

  constructor(private dialog: MatDialog) {
  }

  cases = [
    {name: 'Ритейл', active: true},
  ]
  containers = [
    {
      header: '+200%',
      description: 'Покупок клиентов',
      text: 'Омни-канальная автоматизированная воронка продаж утраивает количество покупок клиентов.'
    },
    {
      header: '+500%',
      description: 'Реактивированных клиентов',
      text: 'Человекоподобные роботы увеличивают количество реактивированных клиентов в 6 раз.'
    },
    {
      header: '60%',
      description: 'Автоматизация',
      text: 'Автоматизация 60% процессов по возвращению клиентов: звонки, отправка SMS, сообщений в мессенджерах.'
    }
  ]

  openModal() {
    this.dialog.open(ModalComponent)
  }
}
