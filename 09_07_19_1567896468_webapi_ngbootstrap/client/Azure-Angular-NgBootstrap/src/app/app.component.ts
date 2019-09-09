import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Azure-Angular-NgBootstrap';

  constructor(private router:Router)
  {
    this.router.navigate(['/login']);
  }

  ngOnInit()
  {
    this.loginCheck();
  }

  login()
  {
    this.router.navigate(['/login']);
  }

  loginCheck()
  {
    this.router.url;
  }
}


