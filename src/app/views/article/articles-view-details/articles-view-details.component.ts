import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as articlesActions from '../../../store/articles.actions';
import { Observable } from 'rxjs';
import { Article } from '../../../core/models/articles';
import * as fromRoot from '../../../store';

@Component({
  selector: 'app-articles-view-details',
  templateUrl: './articles-view-details.component.html',
  styleUrls: ['./articles-view-details.component.css']
})
export class ArticlesViewDetailsComponent implements OnInit {
  articles$: Observable<Article>;
  articleId: string;
  constructor(private route: ActivatedRoute, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('articleId');
    this.articleId = id;
    // this.articleId = + id;
    this.store.dispatch(new articlesActions.LoadAll());
    this.articles$ = this.store.pipe(select(fromRoot.getArtcileById(id)));
    console.log(' this is the id ' + id);
    // this.route.params.subscribe(params => console.log(params));

  }

}
