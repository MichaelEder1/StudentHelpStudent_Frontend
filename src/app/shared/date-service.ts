import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Date} from "./Date";

@Injectable()
export class DateService {

  private api = 'http://shs.s1910456008.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Date>> {
    return this.http.get<Array<Date>>(`${this.api}/dates`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getSingle(code: string): Observable<Date> {
    return this.http.get<Date>(`${this.api}/dates/${code}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getDatesForOffer(id: number): Observable<Array<Date>> {
    return this.http.get<Array<Date>>(`${this.api}/dates/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
