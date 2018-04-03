import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';


import { ChangeListPageComponent } from './pages/change-list-page/change-list-page.component';
import { ChangeEditPageComponent } from './pages/change-edit-page/change-edit-page.component';

import { SearchGameListPageComponent} from './pages/searchGame-list-page/searchGame-list-page.component';
import { CommentsComponent } from './pages/comments/comments.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserEditPageComponent } from './pages/user-edit-page/user-edit-page.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';

import { ExchangeListComponent } from './pages/exchange-list-page/exchange-list-page.component';
import { ChangeOkListPageComponent } from './pages/change-list-page/changeOk-list-page.component';
import { CodeAcceptPageComponent } from './pages/code-accept-page/code-accept-page.component';

import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { EditProfilePageComponent } from './pages/edit-profile-page/edit-profile-page.component';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NewGameService } from './services/newGame.service';
import { HttpModule } from '@angular/http';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';

import { UsersService } from './services/users.service';
import { CommentsService } from './services/comments.service';
import { RegisterComponent } from './pages/register-page/register-page.component';
import { ContentGamesComponent } from './pages/content-games/content-games.component';
import { CommentsReviewComponent } from './pages/comments-review/comments-review.component';

import { DescriptionGameService } from './services/descriptionGame.service';


const ROUTES = [
    { path: '', component: HomePageComponent },

    { path: 'signin', component: SignInPageComponent },
    { path: 'searchGames', component: SearchGameListPageComponent},
    {path: 'register' , component: RegisterComponent},

    {path: 'profile' , component: ProfilePageComponent},
    {path: 'editProfile' , component: EditProfilePageComponent},

    { path: 'home', component: HomePageComponent },

  {
    path: 'users', component: UserListPageComponent,

  },
  {
    path: 'editUsers', component: UserEditPageComponent ,
    canActivate: [AuthService],
  },
  {
    path: 'searchGame', component: SearchGameListPageComponent ,

  },

  {

    path: 'listChanges', component: ChangeListPageComponent ,
    canActivate: [AuthService],
  },
  {
    path: 'editChanges', component: ChangeEditPageComponent ,
    canActivate: [AuthService],
  },
  {
    path: 'okChanges', component: ChangeOkListPageComponent ,
    
  },
  {
    path: 'code', component: CodeAcceptPageComponent ,
    
  },
  {
    path: 'listexChanges', component: ExchangeListComponent ,
    canActivate: [AuthService],
  },
  {
      path: 'contentGames', component: ContentGamesComponent ,

    },


  {

    path: 'comments', component: CommentsComponent ,


  },
    {
      path: 'commentsreview', component: CommentsReviewComponent ,

    },
  {
    path: '**', component: PageNotFoundComponent
  }

];

@NgModule({
  declarations: [
      AppComponent,
      HomePageComponent,
      SearchGameListPageComponent,
      CommentsComponent,
      CommentsReviewComponent,
      PageNotFoundComponent,
      SignInPageComponent,
      UserEditPageComponent,
      UserListPageComponent,
      RegisterComponent,
      ChangeListPageComponent,
      ExchangeListComponent,
      ChangeOkListPageComponent,
      CodeAcceptPageComponent,
      ChangeEditPageComponent,

      ProfilePageComponent,
      EditProfilePageComponent,

      ContentGamesComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
    },
    NewGameService,
    CommentsService,
    AuthService,
    AppDataService,
    UsersService,
    DescriptionGameService, 
    AppConfiguration],
  bootstrap: [AppComponent]
 })
 export class AppModule { }
