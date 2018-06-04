import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  ngOnInit(): void {
  }
  created = new Date();
  posts = [
    {
      title: 'post 1',
      content: 'dodoc kk opk jj hd ndjnd jdjdjcjcj cjdis cijd kffjifjf jijiri jfj kfjk irjrrij ',
      loveIts: 7,
      created_at: this.created
    },
    {
      title: 'post 2',
      content: 'dicjdo icjjcjf sjjsjjssjfi jdhdjvj kroko kokrok okrk krk kor kor ',
      loveIts: -2,
      created_at: this.created
    },
    {
      title: 'post 3',
      content: 'ududh icjdjs ocidjdfb jjvi rplprlp lprlp lprlprlp ll orkr korkok ',
      loveIts: 0,
      created_at: this.created
    }
  ];



}
