import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client.service'
import { NotesService } from './notes.service'
import { TradeService } from './trade.service';
import {TodosService}   from './todos.service';
import { TodosComponent } from './todos/todos.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    TodosComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    
  ],
  providers: [ClientService,NotesService,TradeService,TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
