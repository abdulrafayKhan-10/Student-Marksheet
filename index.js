var Subjects = ["Maths", "English", "Chemistry", "Urdu", "History"];
var ObtainedMarks = [];
var StudentName = prompt("Enter Student Name") || "undefined";
var StudentEnrollment = parseInt(prompt("Enter Student Enrollment No") || "0");
var TotalMarks = 500;
var i;
for (i = 0; i < Subjects.length; i++) {
    ObtainedMarks[i] = parseInt(prompt("Enter Obtained Marks of ".concat(Subjects[i], ": ")) || "0");
}
function sum_of_marks(obtained_marks) {
    return obtained_marks.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
}
function percentage(obtained_marks, total_marks) {
    return (obtained_marks / total_marks) * 100;
}
function grade(percentage) {
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
// document.write(`Student Name: ${StudentName}<br>`);
// document.write(`Student Enrollment No: ${StudentEnrollment}<br>`);
// document.write(`Obtainer Marks: ${sum_of_marks(ObtainedMarks)}<br>`);
// document.write(`Total Marks: ${TotalMarks}<br>`);   
// document.write(`Percentage: ${percentage(sum_of_marks(ObtainedMarks),TotalMarks)}<br>`);
// document.write(`Grade: ${grade(percentage(sum_of_marks(ObtainedMarks),TotalMarks))}<br>`);
var bodyElement = document.querySelector("body");
bodyElement.innerHTML = "<div class=\"container\">\n<h1>Student Mark Sheet</h1>\n\n    \n\n\n<table>\n<tr class=\"total\">\n    <td>Student Name</td>\n    <td>".concat(StudentName, "</td> \n    </tr>\n    <tr class=\"total\">\n    <td>Student Enrollment No</td>\n    <td>").concat(StudentEnrollment, "</td> \n    </tr>\n    <thead>\n        <tr>\n            <th>Subject</th>\n            <th>Marks</th>\n        </tr>\n    </thead>\n    <tbody>\n   ") +
    Subjects.map(function (subject, index) {
        return "<tr>\n            <td>".concat(subject, "</td>\n            <td>").concat(ObtainedMarks[index], "</td>\n            </tr>");
    }).join("")
    + "<tr class=\"total\">\n            <td>Total Marks</td>\n         <td>".concat(sum_of_marks(ObtainedMarks), "/").concat(TotalMarks, "</td> \n        </tr>\n        <tr class=\"total\">\n            <td>Percentage</td>\n            <td>").concat(percentage(sum_of_marks(ObtainedMarks), TotalMarks), "%</td>\n        </tr>\n        <tr class=\"total\">\n            <td>Grade</td>\n            <td>").concat(grade(percentage(sum_of_marks(ObtainedMarks), TotalMarks)), "</td>\n        </tr>\n    </tbody>\n</table>\n</div>");
