import {Injectable} from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import {Offer} from "./offer";
import {Message} from "./message";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private api = 'http://shs.s1910456008.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(`${this.api}/messages`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getMessagesByUser(id:number): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(`${this.api}/messages/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getSingle(id: number): Observable<Offer> {
    return this.http.get<Offer>(`${this.api}/messages/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  remove(id: number) {
    return this.http.delete<Offer>(`${this.api}/messages/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  create(message: Message) {
    return this.http.post<Message>(`${this.api}/messages`, message)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
