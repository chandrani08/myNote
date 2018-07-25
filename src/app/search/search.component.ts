  import { Component, OnInit } from '@angular/core';
  import { NoteService } from '../note.service';
  import { Note } from '../note';





  @Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    providers:[NoteService]

  })
  export class SearchComponent implements OnInit {
    
    notes: Array<Note>;
    searchCriteria: string; //new


    constructor(private _noteService: NoteService) { }


    ngOnInit() {
      this.searchCriteria= '';//new
   }

   getSearchNotes(){ //new
    this._noteService.getSearchNotes(this.searchCriteria)
    .subscribe(
      data => {
        this.notes = [];
        data.forEach(
          element => {
            var newNote = new Note ();
            this.notes.push(newNote);

          })
        
      })
    }

    clearSearch(){
      this.searchCriteria = '';
      this.getSearchNotes();
    }
  }

