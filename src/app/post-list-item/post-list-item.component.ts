import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../services/postService';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  love(){
    console.log('avant' + this.postLoveIts);
    this.postLoveIts = this.postLoveIts + 1;
    console.log('apres' + this.postLoveIts);
    this.postService.emitPosts();

  }

  notLove(){
    this.postLoveIts = this.postLoveIts - 1;
    console.log('apres' + this.postLoveIts);
    this.postService.emitPosts();
  }

  onSupprime() {
    this.postService.supprimePost(this.postTitle, this.postContent, this.postLoveIts , this.postCreatedAt );

  }


}
