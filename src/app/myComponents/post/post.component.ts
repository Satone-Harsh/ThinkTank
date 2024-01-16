import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
@Input() post!:Post;
PF!:string;

constructor(private router: Router) {
  // console.log(this.post.title.toString());
  //"https://c0.wallpaperflare.com/preview/950/335/635/achievement-aspiration-ball-brainstorming.jpg"
  
  this.PF="http://localhost:5000/images/";  
}

redirect(){
  this.router.navigate(['/single',this.post._id]);
}
}
