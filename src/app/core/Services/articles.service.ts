import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Article } from '../../core/models/articles';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient ) { }


  loadArticles(): Observable<Article[]> {
    return this.http
        .get<Article[]>(`${environment.APIEndpoint}/articles`);

  }

  loadArticleId(articleId: number): Observable<Article> {
    return this.http
        .get<Article>(`${environment.APIEndpoint}/articles/${articleId}`);

  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${environment.APIEndpoint}/articles`, article);
  }




  deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(`${environment.APIEndpoint}/articles/${id}`);
  }

}
