import {Component, Input, OnInit} from '@angular/core';
import { LoadPostsService } from '../../service/load-posts.service';
import {AllPostsComponent} from '../all-posts/all-posts.component';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  @Input() post;

  constructor(
  ) { }

  ngOnInit() {

  }
}
