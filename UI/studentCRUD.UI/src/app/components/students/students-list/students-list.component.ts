import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  //creating array of students
  students: Student[] = [
    {
      id: '1251 2251 2161',
      name: 'Ivan Milinkovic',
      email: 'ivan@gmail.com',
      phone: '085123456',
      age: 30,
      faculty: 'Computing'
    },
    {
      id: '7251 7885 7657',
      name: 'Rocky B',
      email: 'rocky@gmail.com',
      phone: '085456789',
      age: 17,
      faculty: 'Art'
    },
    {
      id: '7897 4568 4123',
      name: 'Marijana Homen',
      email: 'marijana@gmail.com',
      phone: '085987654',
      age: 28,
      faculty: 'Law'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
