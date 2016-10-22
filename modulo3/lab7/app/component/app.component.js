"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var STUDENTS = [
    {
        id: 1,
        name: "Maria Camila Medina Lozada",
        classes: ["español", "sociales", "etica", "danzas"],
        grade: 6
    },
    {
        id: 2,
        name: "David Santiago Naranjo Orozco",
        classes: ["matematicas", "filosofia", "estetica", "biologia"],
        grade: 8
    },
    {
        id: 3,
        name: "July Viviana Duarte Alvarez",
        classes: ["algebra", "quimica", "fisica", "educacion fisica"],
        grade: 11
    }
];
var TEACHERS = [
    {
        id: 1,
        name: "Oscar Javier Parra Oliva",
        rooms: [112, 302, 205],
        studies: [9, 11]
    },
    {
        id: 2,
        name: "Luz Amparo mahecha Huertas",
        rooms: [103, 214, 110, 307, 500],
        studies: [8, 10, 11]
    },
    {
        id: 3,
        name: "Olga Lucia Godoy Cierra",
        rooms: [206, 311],
        studies: [6, 7]
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.titlestudent = "Estudiantes";
        this.students = STUDENTS;
        this.titleteacher = "Profesores";
        this.teachers = TEACHERS;
    }
    AppComponent.prototype.onSelectstudent = function (student) {
        this.selectedstudent = student;
    };
    AppComponent.prototype.onSelectteacher = function (teacher) {
        this.selectedteacher = teacher;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map