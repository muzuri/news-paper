import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesIndexViewComponent } from './views/articles-index-view/articles-index-view.component';

import { Route, RouterModule } from '@angular/router';



export const ROUTES: Route[] = [
  {path: '',
   component: ArticlesIndexViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
