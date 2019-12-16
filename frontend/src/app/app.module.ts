import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PostDetailsComponent } from './views/post-details/post-details.component';
import { CommentComponent } from './components/comment/comment.component';

// Services
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostDetailsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService, CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
