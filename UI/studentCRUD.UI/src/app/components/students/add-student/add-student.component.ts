import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../../models/student.model';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudentRequest: Student = {
    id: '',
    name: '',
    email: '',
    phone: '',
    age: 0,
    faculty: ''
  };
  constructor(private studentService: StudentsService, private router: Router) { }

  ngOnInit(): void {
  }

  addStudent() {
    //console.log(this.addStudentRequest);
    this.studentService.addStudent(this.addStudentRequest)
      .subscribe({
        next: (student) => {
          //console.log(student)
          this.router.navigate(['students'])
        }
      });
  }

}
