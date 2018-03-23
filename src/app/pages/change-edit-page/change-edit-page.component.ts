import { Component, OnInit } from '@angular/core';
import {UsersService} from'../../services/users.service';
import { Change } from '../../models/change';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-edit-page',
  templateUrl: './change-edit-page.component.html',
  styleUrls: ['./change-edit-page.component.css']
})
export class ChangeEditPageComponent implements OnInit {
  changeForm: FormGroup;
  constructor(public usersService: UsersService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.changeForm = this.formBuilder.group({
        nameGame: '',
        description: '',
        image: '',
        state:'',
        accept:'',

  });

}

onSubmit() {
  this.usersService.createChange(
    this.changeForm.get('nameGame').value,
    this.changeForm.get('description').value,
    this.changeForm.get('image').value,
    this.changeForm.get('state').value,
    Boolean(this.changeForm.get('accept').value)
  ).subscribe(serverResponse=>{
      this.router.navigate(['/listChanges']);
  }, error=>{
    console.log(error);
  });


  this.router.navigate(['/listChanges']);
}

}