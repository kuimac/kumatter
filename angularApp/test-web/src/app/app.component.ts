import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ResJSON {
  json: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  users;
  userUrl = 'http://localhost:3000/users.json';

  constructor(private http: HttpClient) {
    http.get<ResJSON>(this.userUrl)
      .subscribe(response => {
        console.log(response);
        return (this.users = response);
      });
    }
  }
