import { Component, OnInit } from '@angular/core';
import { ChangeOkListPageComponent } from '../change-list-page/changeOk-list-page.component';
import { Change } from '../../models/change';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-exchange-list-page',
  templateUrl: './exchange-list-page.component.html',
  styleUrls: ['./exchange-list-page.component.css']
})
export class ExchangeListComponent implements OnInit {

    private exchanges: Change[] = [];
 

    constructor(public usersService: UsersService, public router: Router) {
      
    }
  
    ngOnInit() {
      this.usersService.listAllChanges().subscribe(userResponse => {
      this.exchanges = userResponse;
        })
    }

  myEvent(event,change:Change) {
    this.router.navigate(['/okChanges']);
  }

}