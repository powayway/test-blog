import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostsService } from './posts.service';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponentComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', component: PostListComponentComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
