import { NgModule } from '@angular/core';
import { ArticlesIndexViewComponent } from './views/article/articles-index-view/articles-index-view.component';
import {ArticleViewListComponent } from './../app/views/article/article-view-list/article-view-list.component';
import {ArticlesViewDetailsComponent} from './views/article/articles-view-details/articles-view-details.component';

import { Route, RouterModule } from '@angular/router';



export const ROUTES: Route[] =
  [
    {
      path: 'Home',
      component: ArticlesIndexViewComponent,
      children: [
        {
          path: 'articles',
          component: ArticleViewListComponent
        },
        {
          path: 'details',
          component: ArticlesViewDetailsComponent
      }
      ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
