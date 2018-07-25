import { Component, OnInit,EventEmitter } from '@angular/core';
import { Note } from '../note';


@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  inputs:['notes'],
  outputs:['SelectNote']
})
export class NoteListComponent implements OnInit {

  public SelectNote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(not: Note){
    this.SelectNote.emit(not);
  }

}
