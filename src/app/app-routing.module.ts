import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesIndexViewComponent } from './views/articles-index-view/articles-index-view.component';
import { ArticleItemComponent } from '../app/core/components/article-item/article-item.component';

import { Route, RouterModule } from '@angular/router';



export const ROUTES: Route[] =
[
  {
    path: '',
   component: ArticlesIndexViewComponent
  },

  {
    path: 'articles',
    component: ArticleItemComponent
 }
]
;

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
