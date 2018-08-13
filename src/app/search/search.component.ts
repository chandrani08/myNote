  import { Component, OnInit, NgModule,EventEmitter } from '@angular/core';
  import { NoteService } from '../note.service';
  import { Note } from '../note';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  @NgModule({
    imports: [
      FormsModule
    ]
  })





  @Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    providers:[NoteService],
    inputs:['notes','note'],
    outputs: ['SelectResult']

  })
  export class SearchComponent implements OnInit {
    
    notes: Array<Note>;
    searchCriteria: string; 
    
    selectedResult: Note;
    public SelectResult = new EventEmitter();
    private noResult: boolean = true;

    constructor(
      private _noteService: NoteService
    ) { }


    ngOnInit() {

   }

    getSearchNotes(){
     // console.log("Search Component:getSearchNotes");
     // console.log(this.searchCriteria);
      this._noteService.getQuery(this.searchCriteria)
      .subscribe(
        resNoteData => {
          this.notes = resNoteData;
          if (!this.notes) {
            this.noResult = true;
          }
        }
      
      );


    }

    clearSearch(){
      this.searchCriteria = '';
    }

  
    onSelectResult(note:any){
      this.selectedResult = note;
      console.log(this.selectedResult);
    }

    
  
  }

