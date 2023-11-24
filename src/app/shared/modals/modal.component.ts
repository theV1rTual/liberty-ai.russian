import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../services/form.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent {

  constructor(public formService: FormService, private router: Router) {
  }

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/)]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  submit(): void {
    this.formService.sendRequest(this.formGroup.getRawValue()).subscribe(
      (response) => {
        console.log('API response:', response);
        this.router.navigate(['/thank-you']);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
