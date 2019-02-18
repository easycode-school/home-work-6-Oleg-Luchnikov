import { Component, OnInit } from '@angular/core';
import {LoadPostsService} from '../../service/load-posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  public posts;
  constructor(
    public loadPosts: LoadPostsService

  ) { }

  ngOnInit() {
    this.loadPosts.getPosts().subscribe(
      (data) => {
        console.log(data);
        this.posts = data;
      },
      (err) => {
        console.log(err);
      } );
  }

}
