import {Injectable} from "@angular/core";
import {Offer} from "./offer";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable()
export class OfferService {
  private api = 'http://shs.s1910456008.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Offer>> {
    return this.http.get<Array<Offer>>(`${this.api}/offers`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getSingle(id: number): Observable<Offer> {
    return this.http.get<Offer>(`${this.api}/offers/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getOffersByCourse(course: string): Observable<Array<Offer>> {
    return this.http.get<Array<Offer>>(`${this.api}/offers/${course}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

  remove(id: number) {
    return this.http.delete<Offer>(`${this.api}/offers/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }
}


