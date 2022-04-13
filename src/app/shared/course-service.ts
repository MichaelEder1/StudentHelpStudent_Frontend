import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Course} from "./course";

@Injectable()
export class CourseService {
  private api = 'http://shs.s1910456008.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(`${this.api}/courses`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getSingle(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.api}/courses/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getCourseByCode(programName: string) {
    return this.http.get<Array<Course>>(`${this.api}/programs/${programName}/courses`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))

  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}


