import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  //services
  //getAllStudents
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseApiUrl + '/api/students');

  }
  //addStudent
  addStudent(addStudentRequest: Student): Observable<Student>{
    addStudentRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Student>(this.baseApiUrl + '/api/students', addStudentRequest);
  }

  //viewStudent
  viewStudent(id: string): Observable<Student> {
    return this.http.get<Student>(this.baseApiUrl + '/api/students/' + id);
  }

  //updateStudent
  updateStudent(id: string, updateStudentRequest: Student): Observable<Student> {
    return this.http.put<Student>(this.baseApiUrl + '/api/students/' + id, updateStudentRequest);
  }

  //deleteStudent
  deleteStudent(id: string): Observable<Student> {
    return this.http.delete<Student>(this.baseApiUrl + '/api/students/' + id);
  }

}
