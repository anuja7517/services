import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoForm ! : FormGroup;
  constructor(private _uuidService :UuidService,private  _todoService : TodoService
    
    
    ) { }

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      todoItem : new FormControl(null,[Validators.required])
    })
  }

  onPostAdd(){
    if(this.todoForm.valid){
      console.log(this.todoForm.value);
      let obj = {...this.todoForm.value, id :this._uuidService.uuid() };
      //console.log(obj);
      this._todoService.addTodo(obj);
      this.todoForm.reset()
      
      
    }
  }

}
