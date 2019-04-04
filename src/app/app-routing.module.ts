import { NgModule } from '@angular/core';
import { ArticlesIndexViewComponent } from './views/article/articles-index-view/articles-index-view.component';
import {ArticleViewListComponent } from './../app/views/article/article-view-list/article-view-list.component';
import {ArticlesViewDetailsComponent} from './views/article/articles-view-details/articles-view-details.component';

import { Route, RouterModule } from '@angular/router';



export const ROUTES: Route[] = [
 {
   path: '',
   pathMatch: 'full',
   redirectTo: '/articles'
 },
 {
   path: 'articles',
   children: [
     {
       path: '',
       component: ArticlesIndexViewComponent
     },
     {
       path: ':articleId',
       component: ArticlesViewDetailsComponent
     }
   ]
 }

];
@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
