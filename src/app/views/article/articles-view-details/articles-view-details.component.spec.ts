import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesViewDetailsComponent } from './articles-view-details.component';

describe('ArticlesViewDetailsComponent', () => {
  let component: ArticlesViewDetailsComponent;
  let fixture: ComponentFixture<ArticlesViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
