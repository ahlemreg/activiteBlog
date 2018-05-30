import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  love(){
    console.log('avant' + this.postLoveIts);
    this.postLoveIts = this.postLoveIts + 1;
    console.log('apres' + this.postLoveIts);

  }

  notLove(){
    this.postLoveIts = this.postLoveIts - 1;
    console.log('apres' + this.postLoveIts);
  }

  constructor() { }

  ngOnInit() {
  }

}
