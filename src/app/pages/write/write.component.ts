import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import {HttpClient} from '@angular/common/http'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent {
  title!:string;
  desc!:string;
  username!:string;
  file!:File;
  photo!:string;
  imageBlobUrl!: SafeUrl; 
  img:boolean=false;

  constructor(private router: Router, private http: HttpClient,private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      console.log(userData);
      this.username = userData.substring(1, userData.length - 1);
    }
  }

  onFileSelected(event:any){
    console.log(event);
    this.file=<File>event.target.files[0]
    this.generateBlobUrl();
  }

  generateBlobUrl() {
    if (this.file) {
      const blob = new Blob([this.file], { type: this.file.type });
      this.imageBlobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
    }
    this.img=true;
  }

  async onSubmit(){
    const data={
      username:this.username,
      title:this.title,
      desc:this.desc,
      photo:this.photo
    }

    if(this.file){
      console.log("yooooo");
      const dataa=new FormData();
      const filename =Date.now()+this.file.name;
      dataa.append("name",this.file.name);
      dataa.append("file",this.file);
      data.photo=filename;
      console.log(filename);      
      
       this.http.post("http://localhost:5000/api/upload",dataa)
       .subscribe((res:any)=>{
        console.log(res);
       })
      }

    try {
      console.log(data);
      const response = await axios.post('http://localhost:5000/api/post', data);
      this.router.navigate(['/']);
    } catch (error) {
      console.log('Error:', error);
    }
  }
}
