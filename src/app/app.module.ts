import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer/comment-reducer';
// import { NewsApiService } from './news-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule} from '@angular/material';
import {MatListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CreateCommentComponent } from './core/components/create-comment/create-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    StoreModule.forRoot({customer: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
