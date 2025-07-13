
/// <reference path="./js/subjects/Teacher.ts" />
/// <reference path="./js/subjects/Subject.ts" />
/// <reference path="./js/subjects/Cpp.ts" />
/// <reference path="./js/subjects/Java.ts" />
/// <reference path="./js/subjects/React.ts" />

import Subjects = Subjects;

// Create and export constants
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export a teacher
export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
};

// Cpp Subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
