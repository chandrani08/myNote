import { NoteService } from '../note.service';
import { Note } from '../note';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notes', 
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers:[NoteService]

})
export class NotesComponent implements OnInit {
  

  notes: Array<Note>;
  
    

  selectedNote: Note;
  private hidenewNote: boolean = true;
  
  

  constructor(private _noteService: NoteService) { }

  ngOnInit() {

  
  this._noteService.getNotes()
  .subscribe(resNoteData => this.notes = resNoteData)
  }


  onSelectNote(note:any){
    this.selectedNote = note;
    this.hidenewNote = true;
    console.log(this.selectedNote);
  }

  onSubmitAddNote(note: Note){
    console.log('Note Component: onSubmitAddNote');
    this._noteService.addNote(note)
    .subscribe(resNewNote => {
      this.notes.push(resNewNote);
      this.selectedNote = resNewNote;
    })
  }

  onUpdateNoteEvent(note: any) {
    this._noteService.updateNote(note)
      .subscribe(resUpdatedNote => note = resUpdatedNote);
    this.selectedNote = null;
  };

  onDeleteNoteEvent(note: any){
    let noteArray = this.notes;
    this._noteService.deleteNote(note)
    .subscribe(resDeletedNote => {
      for(let i=0; i < noteArray.length; i++)
      {
        if(noteArray[i]._id === note._id)
      {
        noteArray.splice(i,1);
      }
    }
  });
  this.selectedNote = null; 

};

newNote(){
  this.hidenewNote = false;
}

}
