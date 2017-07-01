import { Injectable } from '@angular/core';
import { InitNotes } from './data/notes'

@Injectable()
export class NotesService extends InitNotes {
 
  constructor() { 
    super()
    this.load();
  }

  getNotes(){

      var notes=JSON.parse(localStorage.getItem('notes'));
      return notes;
                
  }

}
