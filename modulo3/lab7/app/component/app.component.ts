import { Component } from '@angular/core';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';

const STUDENTS: Student[] = [
    {
        id: 1,
        name: "Maria Camila Medina Lozada",
        classes: ["español","sociales","etica","danzas"],
        grade: 6
    },
    {
        id: 2,
        name: "David Santiago Naranjo Orozco",
        classes: ["matematicas","filosofia","estetica","biologia"],
        grade: 8
    },
    {
        id: 3,
        name: "July Viviana Duarte Alvarez",
        classes: ["algebra","quimica","fisica","educacion fisica"],
        grade: 11
    }
];

const TEACHERS: Teacher[] = [
    {
        id: 1,
        name: "Oscar Javier Parra Oliva",
        rooms: [112,302,205],
        studies: [9,11]
     },
     {
        id: 2,
        name: "Luz Amparo mahecha Huertas",
        rooms: [103,214,110,307,500],
        studies: [8,10,11]
     },
     {
        id: 3,
        name: "Olga Lucia Godoy Cierra",
        rooms: [206,311],
        studies: [6,7]
     }
];

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html'
})
export class AppComponent {

    titlestudent: string = "Estudiantes";
    selectedstudent: Student;
    students: Student[] = STUDENTS;

    onSelectstudent(student: Student) {
        this.selectedstudent = student;
    }
    titleteacher: string = "Profesores";
    selectedteacher: Teacher;
    teachers: Teacher[] = TEACHERS;

    onSelectteacher(teacher: Teacher) {
        this.selectedteacher = teacher;
    }
}
