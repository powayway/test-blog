import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  constructor() { }

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
    this.postLoveIts++
    return this.postLoveIts;
  }

  onNotLove() {
    console.log("J'aime pas !");
    this.postLoveIts--
    return this.postLoveIts;
  }

  abstrac
}
