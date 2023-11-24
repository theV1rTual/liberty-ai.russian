import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent} from "./components/footer/footer.component";
import {RequestDemoComponent} from "./components/request-demo/request-demo.component";
import {TechnologiesComponent} from "./components/technologies/technologies.component";
import {CasesComponent} from "./components/cases/cases.component";
import {SystemToolsComponent} from "./components/system-tools/system-tools.component";
import {QaComponent} from "./components/qa/qa.component";
import {HeroComponent} from "./components/hero/hero.component";
import {WillSuitComponent} from "./components/will-suit/will-suit.component";
import {StartWorkComponent} from "./components/start-work/start-work.component";
import {ProcessesComponent} from "./components/processes/processes.component";
import {SolutionsComponent} from "./components/solutions/solutions.component";
import {ModalComponent} from "./shared/modals/modal.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { BlogComponent } from './components/blog/blog.component';
import {MatIconModule} from "@angular/material/icon";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {SoundComponent} from "./components/app-sound/sound.component";
import {MainComponent} from "./components/main/main.component";
import {HttpClientModule} from "@angular/common/http";
import {PaginationComponent} from "./components/pagination/pagination.component";
import {BlogModalComponent} from "./shared/modals/blogModal/blogModal.component";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {DialogExampleComponent} from "./components/dialog-example/dialog-example.component";
import {ThankYouPageComponent} from "./components/thank-you-page/thank-you-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RequestDemoComponent,
    TechnologiesComponent,
    CasesComponent,
    SystemToolsComponent,
    QaComponent,
    HeroComponent,
    WillSuitComponent,
    StartWorkComponent,
    ProcessesComponent,
    SolutionsComponent,
    ModalComponent,
    BlogComponent,
    SidebarComponent,
    SoundComponent,
    MainComponent,
    PaginationComponent,
    BlogModalComponent,
    DialogExampleComponent,
    ThankYouPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
