import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { reducer } from './store/articles.reducer';
import { MatListModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material';
import { EffectsModule, Actions } from '@ngrx/effects';
import { ArticlesEffects } from './store/articles.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromRoot from './store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ArticlesIndexViewComponent } from './views/article/articles-index-view/articles-index-view.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleDetailsComponent } from './core/components/article-details/article-details.component';
import { ArticleListComponent } from './core/components/article-list/article-list.component';
import { ArticlesViewDetailsComponent } from './views/article/articles-view-details/articles-view-details.component';
import { ArticleFormComponent } from './core/components/article-form/article-form.component';
import { ArticleNewComponent } from './views/article/article-new/article-new.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesIndexViewComponent,
    ArticleDetailsComponent,
    ArticleListComponent,
    ArticlesViewDetailsComponent,
    ArticleFormComponent,
    ArticleNewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(fromRoot.reducers),
    EffectsModule.forRoot([ArticlesEffects]),
    StoreDevtoolsModule.instrument(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
