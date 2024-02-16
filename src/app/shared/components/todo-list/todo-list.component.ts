import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos ! : Array<Itodo>
  constructor(private _todoService : TodoService) { }

  ngOnInit(): void {
    this.todos = this._todoService.fetchTodos()
  }
  onDelete(id:string){
    console.log(id);
    this._todoService.removetodoItem(id)
    
  }
}
