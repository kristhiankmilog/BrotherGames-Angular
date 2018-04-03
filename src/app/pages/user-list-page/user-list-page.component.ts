import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
// tslint:disable-next-line:import-spacing
import {UsersService} from'../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  private users: User[] = [];
  constructor(public usersService: UsersService) {
    // tslint:disable-next-line:no-trailing-whitespace
      }

      ngOnInit() {
        this.usersService.list().subscribe(todosResponse => {
          this.users = todosResponse;
        // tslint:disable-next-line:semicolon
        })
      }
    // tslint:disable-next-line:eofline
    }