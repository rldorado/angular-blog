import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Post } from '../model/post';

const apiURL = 'http://localhost:9001/posts/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(apiURL).pipe(
        tap(() => this.log('Posts fetched')),
        catchError(this.handleError('getPosts', []))
      );
  }

  getPost(id: any): Observable<Post> {
    const url = `${apiURL}${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => this.log(`fetched post by id=${id}`)),
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}
