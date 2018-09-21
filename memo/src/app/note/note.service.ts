import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Note } from './Note.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private noteUrl: string = "http://localhost:3000/data";
  private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(
    private http: Http,
    private HttpClient: HttpClient) { }

  getNote(): Observable<Array<any>> {
    return this.http.get(this.noteUrl)
      .pipe(
        map(response => {
          return response.json();
        })
      );
  }

  addnot(writer: string, content: string, date: number ): Observable<Note> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let not = { "id": 0, "writer": writer, "content": content, "date": date};
    return this.http.post(this.noteUrl, JSON.stringify(not), options)
      .pipe(
        map(response => {
          return response.json();
        })
      );
  }

  removeNote(not): Observable<boolean> {
      const url = `${this.noteUrl}/${not.id}`;
      return this.http.delete(url, { headers: this.headers })
        .pipe(
          map(response => {
            return true; // 필요한 데이터만 추출한다.
          })
        );
    }

}
