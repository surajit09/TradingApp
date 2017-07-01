import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodosService {

//Fake JSON Data
private _url="http://jsonplaceholder.typicode.com/todos";

  constructor(private http:Http) { }

getTodos(){

   return this.http.get(this._url)
            .map(r=>r.json())
              
}

CreateTodo(todo){

//Getting data via observable
return this.http.post(this._url, JSON.stringify (todo))
                .map(r=>r.json())
                .catch(this.handleError);

}


private handleError(error:Response){
  let msg=`Status code $(error.status) on url $(error.url)`
  console.error(msg);
  return Observable.throw(msg);
}

}
