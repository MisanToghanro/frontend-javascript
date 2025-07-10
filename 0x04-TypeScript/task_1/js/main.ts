
interface Teacher{
   readonly firstName: string,
   readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location:string,
   [key:string]: any
}


const teacher1: Teacher= {
    firstName: "Peter",
    lastName: "Baelish",
    fullTimeEmployee: false,
    yearsOfExperience: 20,
    location: "Kings landing",
    contract: false,
}
console.log(teacher1);


interface Directors extends Teacher{
    numberOfReports: number
}

const directors1: Directors = {
    firstName: "Tyrion",
    lastName: "Lannister",
    fullTimeEmployee: false,
    location: "Casterly Rock",
    numberOfReports: 2,
    yearsOfExperience: 10
}
console.log(directors1)


interface printTeacherFunction{
    (firstName:string, lastName:string): string
}

const  printTeacher: printTeacherFunction = (firstName,lastName) => {
      return `${firstName.charAt(0)}. ${lastName}`
}
console.log(printTeacher("Jon", "Snow"));


interface StudentClassInterface{
workOnHomework():string,
displayName():string
}

interface studentConstructor{
    new(firstName:string, lastName:string): studentConstructor
}
class StudentClass implements StudentClassInterface{

    constructor(public firstName:string, public lastName:string){}

 workOnHomework(): string {
     return "Currently working"
 }
 displayName(): string {
     return this.firstName
 }
}