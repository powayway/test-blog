import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Blog';
  
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem Ipsum',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem Ipsum',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem Ipsum',
      loveIts: -1,
      created_at: new Date()
    }
  ];

  getPosts() {
    return this.posts;
  }

}
