import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Article } from '../../models/articles';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  @Input()
  article: Article = {
    id: '',
    title: '',
    content: ''
  };
  @Output()
  save = new EventEmitter<Article>();

  articleForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.articleForm = formBuilder.group({
      id: new FormControl(this.article.id, Validators.required),
      title: new FormControl(this.article.title, Validators.required),
      content: new FormControl(this.article.content, Validators.required)
    });
  }

  ngOnInit() {
  }
  onSubmit() {
  if (this.articleForm.valid) {
    this.save.emit(this.articleForm.value);
  }
  }
}
