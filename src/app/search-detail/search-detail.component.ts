import { Component, OnInit, EventEmitter } from '@angular/core';



@Component({
  selector: 'search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  inputs:['note'],
  
})
export class SearchDetailComponent implements OnInit {
  note: any;
  
  

  private editTitle: boolean = false;
  private updateNoteEvent = new EventEmitter();
  private deleteNoteEvent = new EventEmitter();

  

  constructor() { }

  ngOnInit() {
  }

  clearNote(){
    
  }
}
