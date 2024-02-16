import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todoArray : Array<Itodo>= [
  {todoItem : "javScript", id:"1"},
  {todoItem : "TypeScript", id:"2"},
  {todoItem : "Angular", id:"3"},
]
  constructor() { }

  fetchTodos() : Array<Itodo>{
    //API call to get todo data from DB  
    return this.todoArray;
  }
  //data base abb to (service krtho)
  addTodo(todoObj:Itodo){ 
    //API to add todo item in DB (add data)
    // obj 
    this.todoArray.push(todoObj)
  }
  removetodoItem (id : string){
    let getIndex = this.todoArray.findIndex(todo => todo.id === id)
    console.log(getIndex);
    this.todoArray.splice(getIndex,1)
    
  }
}
