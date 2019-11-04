import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ResJSON {
  json: any;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  title = 'user';
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
