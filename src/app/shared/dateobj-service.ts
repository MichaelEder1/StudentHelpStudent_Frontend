import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {DateObj} from "./dateobj";
import {User} from "./user";

@Injectable()
export class DateobjService {

  private api = 'http://shs.s1910456008.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<DateObj>> {
    return this.http.get<Array<DateObj>>(`${this.api}/dates`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getSingle(code: string): Observable<DateObj> {
    return this.http.get<DateObj>(`${this.api}/dates/${code}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getDatesForOffer(id: number): Observable<Array<DateObj>> {
    return this.http.get<Array<DateObj>>(`${this.api}/dates/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

  remove(id: number) {
    return this.http.delete<Date>(`${this.api}/dates/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getDate(date: Date) {
    let dateString = date.toString();
    let dateSubstring = dateString.substring(0, 10);
    let splittedDate = dateSubstring.split('-');
    let year = Number(splittedDate[0]);
    let month = (Number(splittedDate[1]) - 1);
    let day = Number(splittedDate[2]);

    let timeString = dateString.substring(11).trim();
    let splittedTime = timeString.split(':');
    let hour = Number(splittedTime[0]);
    let minute = Number(splittedTime[1]);
    let second = Number(splittedTime[2]);

    return new Date(year, month, day, hour, minute, second);
  }

  getStudentStuff(id: number): Observable<Array<DateObj>> {
    return this.http.get<Array<DateObj>>(`${this.api}/profile/studentinfos/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getTutorStuff(id: number): Observable<Array<DateObj>> {
    return this.http.get<Array<DateObj>>(`${this.api}/profile/tutorinfos/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  update(date: DateObj) {
    console.log("in update");
    return this.http.put(`${this.api}/dates/${date.id}`, date)
      .pipe(retry(3)).pipe(catchError(DateobjService.errorHandler));
  }

  private static errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
