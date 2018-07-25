
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'notes', component: NotesComponent},
  {path:'search', component:SearchComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]

})
export class AppRoutingModule { }
