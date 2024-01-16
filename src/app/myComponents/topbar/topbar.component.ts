import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})


export class TopbarComponent {
  logged:boolean=false;
  name!:string;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}
  
  ngOnInit() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.logged = true;
      console.log(userData);
      this.name = userData.substring(1, userData.length - 1);
    }
  }

  handleLogout(){
    this.logged=false;
    localStorage.removeItem('userData');
    localStorage.removeItem('user_id');
    this.router.navigate(['/']);
  }
}
