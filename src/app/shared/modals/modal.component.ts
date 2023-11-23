import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent {

  constructor(public formService: FormService, ) {
  }

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/)]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  submit(): void {
    console.log(1342);
    this.formService.sendRequest(this.formGroup.getRawValue()).subscribe(
      (response) => {
        console.log('API response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
