import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Liberty.ai';

  constructor(private meta: Meta) {
    this.meta.addTag({name: 'Enhance customer retention and reactivation rates with our Human-like AI Bots.', content: 'Boost retail customer loyalty with StellarTech.ai. Elevate your reactivation & retention strategies using advanced human-like bots. Seamlessly engage across channels, personalize experiences, and elevate CSAT with our cutting-edge software. Discover the future of retail marketing.'})
    this.meta.addTag({rel: 'canonical', href: 'StellarTech.ai'})
  }
}
