import { Component, OnInit } from '@angular/core';
import {UsersService} from'../../services/users.service';
import { Change } from '../../models/change';
import { Router } from '@angular/router';
import { Requests } from '../../models/requests';
import { User } from '../../models/user';

@Component({
  selector: 'app-changeOk-list-page',
  templateUrl: './changeOk-list-page.component.html',
  styleUrls: ['./change-list-page.component.css']
})
export class ChangeOkListPageComponent implements OnInit {
  private changes: Change[] = [];
  private change1: Change;
  constructor(public usersService: UsersService,public router: Router) {
    
  }

  ngOnInit() {
    this.usersService.listChanges().subscribe(userResponse => {
    this.changes = userResponse;
      })
  }

  createRequest(change1:Change){
    this.change1=change1;
  }

  myEvent(event) {
    this.router.navigate(['/code']);
  }

}