import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {



  @Input() data: any[];


  
  constructor() {
    
  }

  ngOnInit(): void {
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

}
