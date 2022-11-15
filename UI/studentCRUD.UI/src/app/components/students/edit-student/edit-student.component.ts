import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../../models/student.model';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentInfo: Student = {
    id: '',
    name: '',
    email: '',
    phone: '',
    age: 0,
    faculty: ''
  };

  constructor(private route: ActivatedRoute, private studentService: StudentsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          //call api
          this.studentService.viewStudent(id).subscribe({
            next: (response) => {
              this.studentInfo = response;
            }
          });
        }
      }
    })
  }

  //updateStudent
  updateStudent() {
    this.studentService.updateStudent(this.studentInfo.id, this.studentInfo).subscribe({
      next: (student) => {
        //console.log(student)
        this.router.navigate(['students']);
      }
    });
  }

  //deleteStudent
  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe({
      next: (response) => {
        this.router.navigate(['students']);
      }
    });
  }

}
