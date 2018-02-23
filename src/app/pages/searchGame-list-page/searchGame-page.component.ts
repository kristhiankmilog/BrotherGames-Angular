import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';  

@Component({
  selector: 'app-searchGame-list-page',
  templateUrl: './searchGame-list-page.component.html',
  styleUrls: ['./searchGame-list-page.component.css']
})
export class searchGameListPageComponent implements OnInit {
  private todos: Todo[] = [];
  constructor(public todoService: TodoService) {
    
      }

      ngOnInit() {
        this.todoService.list().subscribe(todosResponse => {
          this.todos = todosResponse;
        })
      }
    
    }
    