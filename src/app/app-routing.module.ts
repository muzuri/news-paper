import { NgModule } from '@angular/core';
import { ArticlesIndexViewComponent } from './views/article/articles-index-view/articles-index-view.component';
import { ArticlesViewDetailsComponent } from './views/article/articles-view-details/articles-view-details.component';
import { ArticleNewComponent } from './views/article/article-new/article-new.component';

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
      },
    ]
  },
  {
    path: ':new',
    component: ArticleNewComponent
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
