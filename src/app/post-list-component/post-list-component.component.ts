import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PostService} from '../services/postService';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements  OnInit, OnDestroy {
  posts: any[];
  postSubscription: Subscription;

  constructor(private postService: PostService ) {}

  ngOnInit(): void {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: any[] ) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();

  }




}
