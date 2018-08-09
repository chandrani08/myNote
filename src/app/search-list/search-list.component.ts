import { Component, OnInit,EventEmitter } from '@angular/core';
import { Note } from '../note';


@Component({
  selector: 'search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
  inputs:['notes'],
  outputs:['SelectNote']
})
export class SearchListComponent implements OnInit {

  public SelectNote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectResult(not: Note){
    this.SelectNote.emit(not);
  }

}
