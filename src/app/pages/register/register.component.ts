import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username!:string;
  email!:string;
  pass!:string;
  err:boolean=false;

  constructor(private router: Router) {}

  async onSubmit(){
    const user={
      username:this.username,
      email:this.email,
      password:this.pass
    };
    console.log(user);
    
    try{
      const response=await axios.post("http://localhost:5000/api/auth/register",user);
      console.log("sucess for registering");
      this.router.navigate(['/login']);
    }catch(e){
      this.err=true;
      console.log(e);
    }
  }
}
