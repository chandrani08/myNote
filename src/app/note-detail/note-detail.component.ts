import { Component, OnInit, EventEmitter } from '@angular/core';



@Component({
  selector: 'note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
  inputs:['note'],
  outputs:['updateNoteEvent', 'deleteNoteEvent']
})
export class NoteDetailComponent implements OnInit {
  note: any;
  
  

  private editTitle: boolean = false;
  private updateNoteEvent = new EventEmitter();
  private deleteNoteEvent = new EventEmitter();

  

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.editTitle = false;
  }

  onTitleClick(){
    this.editTitle = true;
  }

  updateNote(){
    this.updateNoteEvent.emit(this.note);
    
  }

  deleteNote(){
    this.deleteNoteEvent.emit(this.note);
  }

}
