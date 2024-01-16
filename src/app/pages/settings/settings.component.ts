import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})


export class SettingsComponent {
  user_id!:string;
  username!:string;
  email!:string;
  password!:string;
  done:boolean=false;
  
  constructor(private router: Router) {}

  ngOnInit() {
    const _id = localStorage.getItem('user_id');
    if (_id) {
      console.log(_id);
      this.user_id = _id.substring(1, _id.length - 1);
    }
  }

  async onSubmit(){

    const updated={
      _id:this.user_id,
      username:this.username,
      email:this.email,
      password:this.password
    };

    console.log(this.user_id);
    try{
      console.log("before axios:"+this.user_id);      
      const res=await axios.put("http://localhost:5000/api/user/"+this.user_id,updated);
      this.done=true;

      }catch(e){
      console.log(e);
    }

  }
  async handleDelete(){
    try{
      await axios.delete("http://localhost:5000/api/user/"+this.user_id);
      this.router.navigate(['/']);
      localStorage.removeItem('user_id');
      localStorage.removeItem('userData');
      
    }catch(err){
      console.log("delete err "+err);
    }
  }
}
