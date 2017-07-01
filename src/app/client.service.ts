import { Injectable } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { Init } from './data/client'


@Injectable()
export class ClientService extends Init  {


  constructor(private http: Http) {
     super();
     this.load();
   }


   getClient()
   {
     var client=JSON.parse(localStorage.getItem('client'));
      return client;
                
   }

   
}
