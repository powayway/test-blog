import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postId: number;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  getColor() {
    if (this.postLoveIts >= 1) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    }
  }

  onLove() {
    console.log("J'aime !");
    this.postsService.moreLove(this.postId)
  }

  onNotLove() {
    console.log("J'aime pas !");
    this.postsService.lessLove(this.postId);
  }

  onDeletePost() {
    this.postsService.deletePost(this.postId);
  }
}
