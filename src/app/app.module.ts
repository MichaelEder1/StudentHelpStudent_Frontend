import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './components/layout/nav/nav.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/layout/home/home.component';
import {CourseListComponent} from './components/course/course-list/course-list.component';
import {CourseListItemComponent} from './components/course/course-list-item/course-list-item.component';
import {ProgramListComponent} from './components/program/program-list/program-list.component';
import {ProgramListItemComponent} from './components/program/program-list-item/program-list-item.component';
import {PageNotFoundComponent} from './components/layout/page-not-found/page-not-found.component';
import {ImpressumComponent} from './components/impressum/impressum.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ProgramService} from "./shared/program-service";
import {CourseService} from "./shared/course-service";
import {DatenschutzComponent} from './components/datenschutz/datenschutz.component';
import {DateobjService} from "./shared/dateobj-service";
import {ProfileComponent} from './components/profile/profile.component';
import {OfferListComponent} from './components/offer/offer-list/offer-list.component';
import {OfferListItemComponent} from './components/offer/offer-list-item/offer-list-item.component';
import {OfferDetailComponent} from './components/offer/offer-detail/offer-detail.component';
import {OfferService} from "./shared/offer-service";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from "./shared/authentification.service";
import {TokenInterceptorService} from "./shared/token-interceptor.service";
import {JwtInterceptorService} from "./shared/jwt-interceptor.service";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserService} from "./shared/user-service";
import {registerLocaleData} from "@angular/common";
import localeDE from '@angular/common/locales/de';
import { FormComponent } from './components/form/form.component';
import {CanNavigateToAdminGuard} from "./can-navigate-to-admin.guard";

registerLocaleData(localeDE);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CourseListComponent,
    CourseListItemComponent,
    ProgramListComponent,
    ProgramListItemComponent,
    PageNotFoundComponent,
    ImpressumComponent,
    DatenschutzComponent,
    ProfileComponent,
    OfferListComponent,
    OfferListItemComponent,
    OfferDetailComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ProgramService, CourseService, DateobjService, OfferService, AuthenticationService, UserService, CanNavigateToAdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'de'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
