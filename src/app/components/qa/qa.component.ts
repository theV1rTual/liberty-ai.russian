import {Component, ElementRef} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../shared/modals/modal.component";
import {ScrollService} from "../../services/scroll.service";

@Component({
    selector: 'app-qa',
    templateUrl: './qa.component.html'
})

export class QaComponent {

    constructor(private dialog: MatDialog, private scrollService: ScrollService, private el: ElementRef) {
    }

    ngOnInit() {
        this.scrollService.setScrollFunction('component4', () => this.scrollToComponent());
    }

    scrollToComponent() {
        this.el.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end'});
    }

    containers = [
        {
            title: 'Будет ли моя база контактов в безопасности?',
            text: 'Помните, что наша система использует надежные методы шифрования для защиты номеров телефонов, что делает их недоступными для нашего персонала. Это решение  предназначено  исключительно для вашего использования. Более того, мы укрепляем эту безопасность соглашением о неразглашении (NDA), чтобы обеспечить сохранность данных.'
        },
        {
            title: 'Как вы отличаетесь от конкурентов?',
            text: 'То, что нас выделяет, - это наш комплексный подход, легко интегрирующий текстовых и голосовых роботов через несколько каналов с использованием проверенных решений, подтвержденных реальным использованием. Наша команда включает не только IT-специалистов, но и предпринимателей и маркетологов, гарантируя всесторонний взгляд. Мы стремимся к созданию крепких партнерств, стратегически внедряя нашу технологию для оптимизации ценности и прибыли для наших клиентов.'
        },
        {
            title: 'Как рассчитать стоимость разработки робота?',
            text: 'Ценообразование для каждого проекта разрабатывается в соответствии с его уникальными требованиями, учитывая сложность процесса автоматизации и выбранную модель ценообразования. Этот метод обеспечивает индивидуальное решение, точно соответствующее вашим потребностям.'
        }
    ]

    openModal() {
        this.dialog.open(ModalComponent)
    }
}
