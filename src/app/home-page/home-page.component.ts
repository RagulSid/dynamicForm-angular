import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  authenticated = false;

  constructor(public http: HttpClient){}

  logOut(): void{
    this.http.post('http://localhost:8000/login', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
  }

}
