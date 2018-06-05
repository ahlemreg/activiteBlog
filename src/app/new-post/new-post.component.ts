import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../services/postService';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService ,  private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm ) {
    const title = form.value['title'];

    const content = form.value['content'];
    const created_at = new Date();
    const loveIt = 0;

    this.postService.ajoutPost(title, content, loveIt , created_at );

    this.router.navigate(['/posts']);
  }
}
