import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { Newspaper } from '../models/newsp';
import { environment } from '../../../environments/environment.prod';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  constructor( private http: HttpClient) { }

// this will display all articles at the first page
  index(): Observable<Newspaper[]> {
     return this.http
     .get<Newspaper[]>(`${environment.APIEndpoint}/articles`);
  }

  displayComments(articleid: number): Observable<Newspaper> {
    return this.http.get<Newspaper> (`${environment.APIEndpoint}/aricles/${articleid}/comments`);

  }
   createArticle(article: Newspaper): Observable<Newspaper> {

    return this.http.post<Newspaper>(`${environment.APIEndpoint}/articles`, article);
   }
  createComment(comment: Newspaper): Observable<Newspaper> {

    return this.http.post<Newspaper>(`${environment.APIEndpoint}/1/comments`, comment);
  }
  deleteArticle(articleid: number): Observable<Newspaper> {
    return this.http.delete<Newspaper>(`${environment.APIEndpoint}/articles/${articleid}`);
  }

}
