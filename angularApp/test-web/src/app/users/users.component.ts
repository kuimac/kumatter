import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ResJSON {
  json: any;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UserComponent {
  title = 'users';
  users;
  userUrl = 'http://localhost:3000/users.json';

  constructor(private http: HttpClient) {
    console.log('users-component');
    http.get<ResJSON>(this.userUrl)
      .subscribe(response => {
        console.log(response);
        return (this.users = response);
      });
    }
  }
