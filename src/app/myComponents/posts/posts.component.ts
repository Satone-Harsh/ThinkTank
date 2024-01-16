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

constructor(private router: Router){
  
  const fetch= async()=>{
    const temp= await axios.get("http://localhost:5000/api/post");
    this.response=temp.data;
    console.log(this.response);
  }
  fetch();
}

}
