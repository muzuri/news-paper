import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../store';
import {Store} from '@ngrx/store';
import * as articlesActions from '../../store/articles.actions';


@Component({
  selector: 'app-articles-index-view',
  templateUrl: './articles-index-view.component.html',
  styleUrls: ['./articles-index-view.component.css']
})
export class ArticlesIndexViewComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.dispatch(new articlesActions.LoadAll());
  }

}
