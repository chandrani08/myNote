import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


//import { UsersComponent } from './users/users.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesComponent } from './notes/notes.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent, 
    SearchComponent,
    NotesComponent,
    NoteListComponent,
    NoteDetailComponent,
    HomeComponent,
    NotesComponent,
   // UsersComponent,
    NoteListComponent,
    NoteDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    Ng2SearchPipeModule 
    
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
