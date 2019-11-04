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
  title = 'app';

  constructor(private http: HttpClient) {
    }
  }
