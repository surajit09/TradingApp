import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router'

import {ClientComponent} from './client/client.component'
import {TodosComponent} from './todos/todos.component'
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'

const routes: Routes=[

    {path:'', pathMatch: 'full', redirectTo:'client'},
    {path:'client', component:ClientComponent},
    {path:'todos',component:TodosComponent },
    {path:'**',pathMatch:'full',component:PagenotfoundComponent}
]

@NgModule({

imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{}


