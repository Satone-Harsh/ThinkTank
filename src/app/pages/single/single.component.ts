import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  _id!:string;
  response!:Post;
  auth:boolean=false;
  edit:boolean=false;
  updateMode:boolean=false;
  PF:string="http://localhost:5000/images/";

  username!:string;
  title!:string;
  desc!:string;

  constructor(private router: Router ,private route: ActivatedRoute){
    console.log("onIt");
    let id=this.route.snapshot.paramMap.get("id");
    console.log(id);
    if(id){
      this._id=id;
    }

    this.authenticate();
    this.getPost();
  }

  async authenticate(){
    let name=localStorage.getItem('userData');
    if(name){
      name=name.substring(1, name.length - 1)
      this.username=name;
    }
    console.log("1: "+name);
    const res=await axios.get("http://localhost:5000/api/post/"+this._id);

    console.log("auth: "+res.data.username);
    
    
    if(res.data.username===name){
      this.auth=true;
    }
  }

  async getPost(){
    const res=await axios.get("http://localhost:5000/api/post/"+this._id);
    console.log(res);
    
    this.response=res.data;
  };

  async deletePost(){
    console.log("dellllllllll");
    
    await axios.delete("http://localhost:5000/api/post/"+this._id);
    this.router.navigate(['/']);
  }

  editPost(){
    this.updateMode=true;
  }
  
  async putUpdate(){
    const data={
      username:this.username,
      title:this.response.title,
      desc:this.response.desc
    }
    try{
      await axios.put("http://localhost:5000/api/post/"+this._id,data);
      console.log("zala");
      
      location.reload();
    }
    catch(e){
      console.log("error haiiii"+e);
    }
  }

}
