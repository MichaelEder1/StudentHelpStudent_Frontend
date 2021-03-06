import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/layout/home/home.component";
import {ProgramListComponent} from "./components/program/program-list/program-list.component";
import {CourseListComponent} from "./components/course/course-list/course-list.component";
import {PageNotFoundComponent} from "./components/layout/page-not-found/page-not-found.component";
import {ImpressumComponent} from "./components/impressum/impressum.component";
import {DatenschutzComponent} from "./components/datenschutz/datenschutz.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {OfferListComponent} from "./components/offer/offer-list/offer-list.component";
import {OfferDetailComponent} from "./components/offer/offer-detail/offer-detail.component";
import {FormComponent} from "./components/form/form.component";
import {CanNavigateToAdminGuard} from "./can-navigate-to-admin.guard";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'neu', component: FormComponent, canActivate:[CanNavigateToAdminGuard]},
  {path: 'neu/:id', component: FormComponent, canActivate:[CanNavigateToAdminGuard]},
  {path: 'lehrveranstaltungen', component: ProgramListComponent},
  {path: 'lehrveranstaltungen/:course', component: CourseListComponent},
  {path: 'lehrveranstaltungen/:program/:course/angebote', component: OfferListComponent},
  {path: 'lehrveranstaltungen/:program/:course/angebote/:id', component: OfferDetailComponent},
  {path: 'lehrveranstaltungen/:program/:course/angebote/:id/admin', component: FormComponent, canActivate:[CanNavigateToAdminGuard]},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'datenschutz', component: DatenschutzComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[CanNavigateToAdminGuard]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
