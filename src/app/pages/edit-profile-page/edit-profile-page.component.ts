import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css']
})
export class EditProfilePageComponent implements OnInit {
  private todos: Todo[] = [];
  constructor(public todoService: TodoService) {

      }

      ngOnInit() {
        this.todoService.list().subscribe(todosResponse => {
          this.todos = todosResponse;
        })
      }

    }