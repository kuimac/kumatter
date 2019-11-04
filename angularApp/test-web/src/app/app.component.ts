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

  constructor(private http: HttpClient) {
    }
  }
