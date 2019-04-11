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
  constructor(private fb: FormBuilder) {
    this.articleForm = fb.group({
      // id: new FormControl(this.article.id, Validators.required),
      title: [this.article.title, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      content: [this.article.content, Validators.compose([Validators.minLength(10), Validators.maxLength(500)])]
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
