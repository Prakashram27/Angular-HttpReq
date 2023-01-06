import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { keyframes } from '@angular/animations';
import { ReadKeyExpr } from '@angular/compiler';
import { Post } from './post.module'
import { PostsServices } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts : any = [];
  isFetching = false;
  constructor(private http: HttpClient,
    private postsServices : PostsServices) {}

  ngOnInit() {
    this.postsServices.fetchposts().subscribe(posts=>{
    });
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    // console.log(postData);
    this.postsServices.createAndStorePost(postData.title,postData.content)
    
    
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.fetchpost()

  }

  onClearPosts() {
    // Send Http request

  }

  private fetchpost(){
   this.postsServices.fetchposts();
}
}