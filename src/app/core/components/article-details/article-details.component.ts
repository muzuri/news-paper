import { Component, OnInit, Input} from '@angular/core';
import { Article } from '../../models/articles';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

 @Input()
 article: Article;
  constructor() { }

  ngOnInit() {
  }

}
