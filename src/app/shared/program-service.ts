import {Injectable} from "@angular/core";
import {Program} from "./program";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable()
export class ProgramService {
  private api = 'http://shs.s1910456008.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Program>> {
    return this.http.get<Array<Program>>(`${this.api}/programs`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getSingle(code: string): Observable<Program> {
    return this.http.get<Program>(`${this.api}/programs/${code}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
