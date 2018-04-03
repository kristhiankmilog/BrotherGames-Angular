import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.css']
})


export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(
        public todoUser: UsersService,
        public formBuilder: FormBuilder,
        public router: Router,
    ) {

    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: '',
            email: '',
            password: '',
            image: '',
            description: ''
        });
    }

    onSubmit() {
        this.todoUser.registerUser(
        this.registerForm.get('username').value,
        this.registerForm.get('email').value,
        this.registerForm.get('password').value,
        this.registerForm.get('image').value,
        this.registerForm.get('description').value
        ).subscribe(serverResponse=>{
            this.router.navigate(['/signin']);
        }, error=>{
        console.log(error);
        });


  this.router.navigate(['/signin']);
}
}
