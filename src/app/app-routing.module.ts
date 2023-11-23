import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {BlogComponent} from "./components/blog/blog.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
