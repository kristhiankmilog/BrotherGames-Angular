import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {
  todoForm: FormGroup;
  constructor(public todoUser: UsersService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
    firstname: '',
    lastname: '',
    image: '',
    username:'',
    description:''
  });

}

onSubmit() {
  this.todoUser.registerUser(
    this.todoForm.get('firstname').value,
    this.todoForm.get('lastname').value,
    this.todoForm.get('image').value,
    this.todoForm.get('username').value,
    this.todoForm.get('description').value,
  ).subscribe(serverResponse=>{
      this.router.navigate(['/users']);
  }, error=>{
    console.log(error);
  });


  this.router.navigate(['/users']);
}

}