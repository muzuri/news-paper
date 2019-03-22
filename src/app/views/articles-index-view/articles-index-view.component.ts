import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../store';
import {Store, select} from '@ngrx/store';
import * as articlesActions from '../../store/articles.actions';
import { Observable } from 'rxjs';
import {Article } from '../../core/models/articles';
import * as frmIndex from '../../store';
import {tap } from 'rxjs/operators';



@Component({
  selector: 'app-articles-index-view',
  templateUrl: './articles-index-view.component.html',
  styleUrls: ['./articles-index-view.component.css']
})
export class ArticlesIndexViewComponent implements OnInit {
  articles$: Observable<Article[]>;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
     this.store.dispatch(new articlesActions.LoadAll());
     this.articles$ = this.store.pipe(select(fromRoot.getAllArticles)),
    tap(console.log);

     // console.log(this.articles$);
  //   // this.store.pipe.select('articles').subscribe(state => {
  //    console.log(state);
  //   });
  // }

}
}
