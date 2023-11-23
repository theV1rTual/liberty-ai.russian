import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss']
})

export class SoundComponent {
  changeColor = false;

  toggleColor() {
    this.changeColor = !this.changeColor;
  }
}
