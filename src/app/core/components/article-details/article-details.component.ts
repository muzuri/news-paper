import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Article } from '../../models/articles';



@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

 @Input()
 article: Article;
//  @Output()
//  articleSelected = new EventEmitter<Article>();
  constructor() { }

  ngOnInit() {
  }
onArticleClicked() {
  console.log('the app-article-details has been clicked ');
  // this.articleSelected.emit(this.article);
}

}
