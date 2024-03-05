let Subjects: String[] = ["Maths", "English", "Chemistry", "Urdu", "History"];
let ObtainedMarks: number[] = []
let StudentName: String = prompt("Enter Student Name") || "undefined";
let StudentEnrollment: number = parseInt(prompt("Enter Student Enrollment No") || "0");
let TotalMarks: number = 500;
let i: number;
for (i = 0; i < Subjects.length; i++) {
    ObtainedMarks[i] = parseInt(prompt(`Enter Obtained Marks of ${Subjects[i]}: `) || "0");
}
function sum_of_marks(obtained_marks: number[]): number {
    return obtained_marks.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
}
function percentage(obtained_marks: number, total_marks: number): number {
    return (obtained_marks / total_marks) * 100;
}
function grade(percentage: number): string {
    if (percentage >= 80) {
        return "A+";
    }
    else if (percentage >= 70) {
        return "A";
    }
    else if (percentage >= 60) {
        return "B";
    }
    else if (percentage >= 50) {
        return "C";
    }
    else if (percentage >= 40) {
        return "D";
    }
    return "F";
}
const bodyElement = document.querySelector("body") as HTMLBodyElement;
bodyElement.innerHTML = `<div class="container">
<h1>Student Mark Sheet</h1>
<table>
<tr class="total">
    <td>Student Name</td>
    <td>${StudentName}</td> 
    </tr>
    <tr class="total">
    <td>Student Enrollment No</td>
    <td>${StudentEnrollment}</td> 
    </tr>
    <thead>
        <tr>
            <th>Subject</th>
            <th>Marks</th>
        </tr>
    </thead>
    <tbody>
   `+
    Subjects.map((subject, index) => {
        return `<tr>
            <td>${subject}</td>
            <td>${ObtainedMarks[index]}</td>
            </tr>`
    }).join("")
    + `<tr class="total">
            <td>Total Marks</td>
         <td>${sum_of_marks(ObtainedMarks)}/${TotalMarks}</td> 
        </tr>
        <tr class="total">
            <td>Percentage</td>
            <td>${percentage(sum_of_marks(ObtainedMarks), TotalMarks)}%</td>
        </tr>
        <tr class="total">
            <td>Grade</td>
            <td>${grade(percentage(sum_of_marks(ObtainedMarks), TotalMarks))}</td>
        </tr>
    </tbody>
</table>
</div>`;
