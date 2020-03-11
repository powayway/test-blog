import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {



  posts: any[];

  postsSubscription: Subscription;

  constructor(private postsService: PostsService) {
    
  }

  ngOnInit(): void {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;

      }
    );
    this.postsService.emitPostsSubject();
  }


  getClass(loveIts) {
    if (loveIts > 0) {
      return { 'list-group-item': true, 'list-group-item-success': true };
    } else if (loveIts < 0) {
      return { 'list-group-item': true, 'list-group-item-danger': true };
    } else if (loveIts === 0) {
      return { 'list-group-item': true };
    }
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
