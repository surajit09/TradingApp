import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service'
import { NotesService } from '../notes.service'
import { TradeService } from '../trade.service'



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
client;
notes;
trade;
  constructor(private _clientService: ClientService, private _notesService: NotesService,private _tradeService: TradeService ) {}

  ngOnInit() {

    this.client=this._clientService.getClient();
    console.log( this.client);
    this.notes=this._notesService.getNotes();
    console.log(this.notes);
    this.trade=this._tradeService.getTrade();
    console.log(this.trade);
  }


accept(){

  //code for accept
  console.log("clciked!!")
}

  transfer(){
    //code for accept
  
}
delete(){

  //code for delete
}


};
