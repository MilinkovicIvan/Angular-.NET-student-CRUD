import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student.model';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  //array of students
  students: Student[] = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.studentsService.getAllStudents()
      .subscribe({
        //next: (students) => {console.log(students)},
        next: (students) => {this.students = students},
        error: (response) => {console.log(response)}
    });
  }

}
