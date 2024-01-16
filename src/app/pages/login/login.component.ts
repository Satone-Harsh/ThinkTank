import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!:string;
  pass!:string;
  err:boolean=false;

  constructor(private router: Router) {}

  async onSubmit(){
    const user={
      username:this.username,
      password:this.pass
    };
    console.log(user);
    
    try{
      const response=await axios.post("http://localhost:5000/api/auth/login",user);
      console.log(response.data);      
      localStorage.setItem('userData', JSON.stringify(response.data.username));
      localStorage.setItem('user_id', JSON.stringify(response.data._id));
      console.log("sucess for logging in");
      this.router.navigate(['/']);
    }catch(e){
      this.err=true;
      console.log(e);
    }
  }
}
