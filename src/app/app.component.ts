import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  created = new Date();
  posts = [
    {
      title: 'post 1',
      content: 'dodoc kk opk jj hd ndjnd jdjdjcjcj cjdis cijd',
      loveIts: 7,
      created_at: this.created
    },
    {
      title: 'post 2',
      content: 'dicjdo icjjcjf sjjsjjssjfi jdhdjvj',
      loveIts: -2,
      created_at: this.created
    },
    {
      title: 'post 3',
      content: 'ududh icjdjs ocidjdfb jjvi',
      loveIts: 0,
      created_at: this.created
    }
  ];



}
