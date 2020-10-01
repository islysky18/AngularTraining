import { BadRequest } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { Observable, throwError } from 'rxjs';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  create(resource) {
    // return throwError(new AppError());
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  update(resource) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }
  delete(id) {
    // return throwError(new AppError('It has been delete'));
    return this.http.delete(this.url + '/' + id).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
    //promise
    // return this.http
    //   .delete(this.url + '/' + id)
    //   .pipe(
    //     retry(3),
    //     map((response) => response),
    //     catchError(this.handleError)
    //   )
    //   .toPromise();
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadRequest(error.json()));
    }

    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }
}
