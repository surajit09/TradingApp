import { Component, OnInit } from '@angular/core';
import {TodosService}  from '../todos.service'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
errorMessage: string;
 todos=[];
  constructor(private _todosService:TodosService) { }

  ngOnInit() {

    this._todosService.getTodos().subscribe(t=>this.todos=t, 
    
    error=>this.errorMessage=<any>error
    
    
    );
  }

}
