import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  
  private posts = [
    {
      id: 0,
      title: 'Mon premier post',
      content: 'Lorem Ipsum',
      loveIts: 0,
      created_at: new Date()
    },
    {
      id: 1,
      title: 'Mon deuxième post',
      content: 'Lorem Ipsum',
      loveIts: 1,
      created_at: new Date()
    },
    {
      id: 2,
      title: 'Mon troisième post',
      content: 'Lorem Ipsum',
      loveIts: -1,
      created_at: new Date()
    }
  ];

  postsSubject = new Subject<any[]>();


  constructor() { }

  emitPostsSubject() {
    this.postsSubject.next(this.posts);
  }


  addNewPost(title: string, content: string) {
   const  index: number = this.posts.length+1;
    var date = new Date();

    this.posts.push({id:index, title:title, content:content, loveIts:0, created_at:date });

    this.emitPostsSubject();
  }

  deletePost(i: number) {
    const index = this.posts[i].id;
    this.posts.splice(index, 1);
    console.log('test suppr');
    this.emitPostsSubject();
  }

  moreLove(i: number) {
    this.posts[i].loveIts++;
    return this.posts[i].loveIts;
  }

  lessLove(i: number) {
    this.posts[i].loveIts--;
    return this.posts[i].loveIts;
  }
}
