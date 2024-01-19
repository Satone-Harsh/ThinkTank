import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
response!:Post[];

constructor(private router: Router, private http:HttpClient){
  
  http.get<Post[]>("http://localhost:5000/api/post")
  .subscribe(
    (res:Post[])=>{
      this.response=res;
      console.log(this.response);
  })
}

}
