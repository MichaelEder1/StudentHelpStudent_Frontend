import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/layout/home/home.component";
import {ProgramListComponent} from "./components/program/program-list/program-list.component";
import {CourseListComponent} from "./components/course/course-list/course-list.component";
import {PageNotFoundComponent} from "./components/layout/page-not-found/page-not-found.component";
import {ImpressumComponent} from "./components/impressum/impressum.component";
import {DatenschutzComponent} from "./components/datenschutz/datenschutz.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'lehrveranstaltungen', component: ProgramListComponent},
  {path: 'lehrveranstaltungen/:course', component: CourseListComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'datenschutz', component: DatenschutzComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
