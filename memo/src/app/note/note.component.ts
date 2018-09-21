import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';
import { Note } from './Note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  data: any = [];

  errorMessage: string;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNote();
  }
  getNote() {
    this.noteService.getNote()
      .subscribe(
        note => this.data = note, // 성공콜백
        error => this.errorMessage = <any>error); // 실패콜백
  }


  onSubmit(f) {
    if (f.valid) {
      var not = f.value;

      this.noteService.addnot(not.writer, not.content, not.date)
        .subscribe(
          res => {
            this.data.push({
              id: not.id,
              writer: not.writer,
              content: not.content,
              date: not.date
            });
          }, // 성공 콜백
          error => this.errorMessage = <any>error); // 실패 콜백

    }
  }

  removeNote(person: any) {

    let id = person.id;

    this.noteService.removeNote(person)
      .subscribe(
        noResponse => {
          let targetIndex = this.data.findIndex(not => not.id === id);
          this.data.splice(targetIndex, 1);
        }, // 성공 콜백
        error => this.errorMessage = <any>error); // 실패 콜백

    return false;
  }
}
