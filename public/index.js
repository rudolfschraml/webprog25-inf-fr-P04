import DATA from "./data.js";

import App from "./app.js";
import DATA from "./data.js";
import Department from "./dept.js";
import Student from "./student.js";

let app = new App();
app.loadData(DATA);

/* Expose Student, Department, and App to the console */
window.Student = Student;
window.Department = Department;
window.app = app;

/* A few test cases to check some parts of App. Not at all comprehensive. Please feel free to add more tests here */
const testApp = () => {
  /* Reset app data */
  app.loadData(DATA);

  let student = new Student("abc123", "Test", "Student");
  console.assert(student.toString() === "Test Student (abc123)", "Student.toString (or constructor) mismatch");
  console.assert(student.dept === null, "Student.dept initialization mismatch");
  console.assert(student.ectsCompleted === 0 && student.isAlum === false, "Student.ectsCompleted or isAlum mismatch");
  student.addEcts(50);
  student.addEcts(30);
  console.assert(student.ectsCompleted === 80, "Student.ectsCompleted mismatch");
  let dept = new Department("Test Subjects", "TEST");
  console.assert(dept.name === "Test Subjects", "Department.constructor mismatch");

  let rudolf = app.students.rschraml;
  console.assert(rudolf.fullName() === "Rudolf Schraml", "Student.fullName() mismatch");
  let cs = app.depts.CS;
  console.assert(cs.name === "Computer Science", "Department.name mismatch");
  console.assert(cs.students.length === 0, "Department.students mismatch");

  student = app.declare("rschraml", "CS");
  console.assert(student === rudolf, "App.declare return value mismatch");
  console.assert(rudolf.dept === "Computer Science", "Student.dept mismatch after declare");
  
  let amoore = app.declare("amoore", "CS");

  
  let grads = app.graduate("CS");
  console.assert(grads.length === 1 && grads[0] === amoore, "App.graduate return value mismatch");
  console.assert(amoore.isAlum === true && rudolf.isAlum === false, "Student.isGraduated mismatch");
  console.assert(cs.students.length === 1 && cs.students[0] === rudolf, "Department.students mismatch after graduate");
  console.log("Tests completed");
};
window.testApp = testApp;
