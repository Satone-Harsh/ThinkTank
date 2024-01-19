import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { User } from 'src/app/user';

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

  constructor(private router: Router, private http:HttpClient) {}

  async onSubmit(){
    const user={
      username:this.username,
      email:this.email,
      password:this.pass
    };
    console.log(user);
    
      this.http.post<User>("http://localhost:5000/api/auth/register",user).subscribe({
        next: (res)=>{
        console.log("sucess for registering");
        this.router.navigate(['/login']);
      },
        error:(e)=>{
        console.log(e);
        this.err=true;
      }});
  
  }
}