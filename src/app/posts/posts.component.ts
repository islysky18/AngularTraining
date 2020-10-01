import { BadRequest } from './../common/bad-request-error';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { Observable, throwError } from 'rxjs';
import { PostService } from './../services/post.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  ngOnInit(): void {
    //in old version, response is Response type not an object, so we can see the headers, status etc.
    this.service.getAll().subscribe((posts) => {
      this.posts = posts;
      console.log(posts);
    });
  }

  posts: any;

  constructor(private service: PostService) {}

  createPost(input: HTMLInputElement) {
    //let post: any = { title: input.value }; // #first way to identify the post.id
    let post = { title: input.value }; // #second way
    this.posts.splice(0, 0, post); // using splice to add in the beginning of list

    input.value = '';

    this.service.create(post).subscribe(
      (newPost) => {
        //post.id = response;// #first way
        post['id'] = newPost; // #second way
        // console.log(response);
        // console.log(typeof response);
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadRequest) {
          //this.form.setError(error.originalError);
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(post) {
    this.service.update(post).subscribe((updatedPost) => {
      console.log(updatedPost);
    });
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, post);
      if (error instanceof NotFoundError) {
        // return throwError(new NotFoundError());
        alert('This post has already been deleted');
      } else {
        throw error;
      }
    });
    //Promise
    // this.service.delete(post.id);
  }
}
