import { Injectable } from '@angular/core';
import { InitTrade }  from './data/trade'

@Injectable()
export class TradeService extends InitTrade{

  constructor() { 

    super();
    this.load();

  }

getTrade(){

//getting data via loca;l storage
      var trade=JSON.parse(localStorage.getItem('trade'));
      return trade;
                
  }



}
