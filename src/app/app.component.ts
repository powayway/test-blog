import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    
  }

  
}
