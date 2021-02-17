import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  myPosts: Post[] = [
    {
      title: 'Something about Tuesday',
      thought: "It's been a long day.",
    },
    {
      title: 'Paczki Day',
      thought: 'I like the chocolate filling.',
    },
    {
      title: 'Angular',
      thought: 'Angular is pretty wild.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onDelete = (index: number): void => {
    this.myPosts.splice(index, 1);
  };

  onSubmit = (post: Post): void => {
    this.myPosts.unshift(post);
  };
}
