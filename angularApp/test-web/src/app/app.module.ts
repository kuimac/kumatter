import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { TopComponent } from './top/top.component';
import { NewComponent } from './user/new/new.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'users', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    TopComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
