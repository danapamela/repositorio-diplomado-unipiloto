import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';
import {StudentService} from '../service/student.service';
import {TeacherService} from '../service/teacher.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html',
  providers: [StudentService, TeacherService]
})
export class AppComponent implements OnInit {

    constructor(private StudentService: StudentService, TeacherService: TeacherService){}

    titlestudent: string = "Estudiantes";
    students: Student[] 

    ngOnInit(){
        this.StudentService.getStudents()
        .then(students => this.students = students)
        .catch(error => console.log(error)); 
    }
    titleteacher: string = "profesores";
    

