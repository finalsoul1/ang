import { Component, OnInit } from '@angular/core';
import { StudentHttpService } from './service/student.http.service';
import { Student } from './service/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student[];

  constructor(private studentHttpService: StudentHttpService) {}

  ngOnInit() {
    this.studentHttpService.getStudent()
      .then(student => this.student = student)
      .catch(err => console.log(err))
  }

}
