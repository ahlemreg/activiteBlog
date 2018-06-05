import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {PostService} from './services/postService';
import { NewPostComponent } from './new-post/new-post.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


const appRoute: Routes = [
  {path: 'new', component: NewPostComponent},
  {path: 'posts', component: PostListComponentComponent},
  {path: '', component: PostListComponentComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
