import { NgModule } from '@angular/core';
import { ArticlesIndexViewComponent } from './views/article/articles-index-view/articles-index-view.component';
import { Route, RouterModule } from '@angular/router';
export const ROUTES: Route[] =
  [
    {
      path: '',
      component: ArticlesIndexViewComponent
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

