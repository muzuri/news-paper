import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesIndexViewComponent } from './articles-index-view.component';

describe('ArticlesIndexViewComponent', () => {
  let component: ArticlesIndexViewComponent;
  let fixture: ComponentFixture<ArticlesIndexViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesIndexViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesIndexViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
