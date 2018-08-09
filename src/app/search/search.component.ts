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
    searchCriteria: string; //new
    
    selectedResult: Note;
    public SelectResult = new EventEmitter();
    

    constructor(
      private _noteService: NoteService
    ) { }


    ngOnInit() {

      //this.searchCriteria= '';//new
      //this.getNote();
   }

/*    getNote(){ //new
    this._noteService.getNote(this.searchCriteria)
    .subscribe(
      data => {
        this.notes = [];
        data.forEach(
          element => {
            var newNote = new Note ();
            this.notes.push(newNote);

          })
        
      })
    } */

    getSearchNotes(){
      console.log("Search Component:getSearchNotes");
      console.log(this.searchCriteria);
      this._noteService.getQuery(this.searchCriteria)
      .subscribe(resNoteData => this.notes = resNoteData)

/*       .subscribe(
        data => {
          console.log('Received on frontend...');
          console.log(data);
          this.notes = [];
          data.forEach(
            element => {
              var newNote = new Note ();
              this.notes.push(newNote);
            });
          
        }); */
    }

    clearSearch(){
      this.searchCriteria = '';
      //this.getNote();
    }

    // onselect(not:Note){
    //   this.SelectResult.emit(not);
    // }

  

    onSelectResult(note:any){
      this.selectedResult = note;
      console.log(this.selectedResult);
    }

    
  
  }

