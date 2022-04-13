import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './components/layout/nav/nav.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/layout/home/home.component';
import {CourseListComponent} from './components/course/course-list/course-list.component';
import {CourseListItemComponent} from './components/course/course-list-item/course-list-item.component';
import {CourseDetailsComponent} from './components/course/course-details/course-details.component';
import {ProgramListComponent} from './components/program/program-list/program-list.component';
import {ProgramListItemComponent} from './components/program/program-list-item/program-list-item.component';
import {PageNotFoundComponent} from './components/layout/page-not-found/page-not-found.component';
import {ImpressumComponent} from './components/impressum/impressum.component';
import {HttpClientModule} from "@angular/common/http";
import {ProgramService} from "./shared/program-service";
import {CourseService} from "./shared/course-service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CourseListComponent,
    CourseListItemComponent,
    CourseDetailsComponent,
    ProgramListComponent,
    ProgramListItemComponent,
    PageNotFoundComponent,
    ImpressumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProgramService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
