import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import { Note } from './note';
import { Observable } from 'rxjs';
import { NotesComponent } from './notes/notes.component';

@Injectable()
export class NoteService {
  
  


private _getUrl = "/api/notes";
private _postUrl = "/api/notes";
private _putUrl = "/api/notes/";
private _deleteUrl = "/api/notes/";

constructor(private _http: Http) { }

getSearchNotes(searchCriteria:any): Observable<Note[]>{ //new
  console.log("Note Service:getSearchNotes");
  let params: URLSearchParams = new URLSearchParams();
  params.set('tags',searchCriteria);

  return this._http.get("http://localhost:3000/getSearchNotes",{search:params})
  .map((res:any) => {
    return res.json();

     });
    // .catch ((error:any) =>{
    //    return Observable.throw(error.json ? error.json().error : error || 'Server error')

    // });
} //new

getNotes(){
  console.log('Note Service: getNotes');
  return this._http.get(this._getUrl)
  .map((response: Response) => response.json());
}


addNote(note: Note){
  console.log('Note Service: addNote');
  console.log(JSON.stringify(note));
  let headers = new Headers({ 'Content-Type': 'application/json'});
  let options = new RequestOptions({ headers: headers});
  return this._http.post(this._postUrl, JSON.stringify(note), options)
  .map ((response:Response) => response.json());
}

updateNote(note: Note){
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({headers: headers});
  return this._http.put(this._putUrl + note._id, JSON.stringify(note), options)
  .map((response: Response) => response.json());
}

deleteNote(note: Note){
  return this._http.delete(this._deleteUrl + note._id)
  .map((response: Response) => response.json());
}

}
