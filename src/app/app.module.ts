import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/articles.reducer';

import { EffectsModule, Actions} from '@ngrx/effects';
import { ArticlesEffects } from './store/articles.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromRoot from './store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ArticlesIndexViewComponent } from './views/articles-index-view/articles-index-view.component';
import {AppRoutingModule} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ArticlesIndexViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromRoot.reducers),
    EffectsModule.forRoot([ArticlesEffects]),
    StoreDevtoolsModule.instrument(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
