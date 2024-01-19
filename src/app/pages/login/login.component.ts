import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { delay } from 'rxjs';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!:string;
  pass!:string;
  err:boolean=false;

  constructor(private router: Router,private http:HttpClient) {}

  async onSubmit(){
    const user={
      username:this.username,
      password:this.pass
    };
    console.log(user);
    
      this.http.post<User>("http://localhost:5000/api/auth/login",user)
      .subscribe(
        async (res:User)=>{
          console.log(res);
            localStorage.setItem('userData', JSON.stringify(res.username));
            localStorage.setItem('user_id', JSON.stringify(res._id));
            // await new Promise<void>((resolve) => setTimeout(resolve, 500));
            console.log("sucess for logging in");
            this.router.navigate(['/']);
      },(e)=>{
        this.err=true;
        console.log(e);
      })
    
  }
}
