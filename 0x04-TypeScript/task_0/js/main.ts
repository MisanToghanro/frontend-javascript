
//Defining Types with interface

interface Student {
    firstName: string;
     lastName: string;
      age: number;
      location: string;
}

const student1: Student = {
    firstName: "Daemon",
     lastName: "Targaryen",
      age: 18,
      location: "Dragon stone",
}
const student2: Student= {
    firstName: "Viserys",
     lastName: "Targaryen",
      age: 22,
      location: "Kings Landing",
}

const studentsList : Student[]= [student1,student2]

const table = document.createElement("table");
const tbody = document.createElement("tbody")
const thead = document.createElement("thead");
const trow = document.createElement("tr");


const header = ["firstName, location"];
thead.innerHTML = `${header}`;
table.appendChild(thead);

studentsList.forEach((student) =>{
    trow.innerHTML=`<td>${student.firstName}</td> <td>${student.location}</td>`;
    tbody.appendChild(trow)

})
table.appendChild(tbody);
document.appendChild(table);