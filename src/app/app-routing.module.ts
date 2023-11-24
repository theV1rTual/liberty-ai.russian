import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {BlogComponent} from "./components/blog/blog.component";
import {MainComponent} from "./components/main/main.component";
import {ThankYouPageComponent} from "./components/thank-you-page/thank-you-page.component";

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'thank-you',
    component: ThankYouPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
