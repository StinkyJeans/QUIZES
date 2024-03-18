// 1. Create global array without data inside named students
let students = [];

// 2. Populate the array with an object 5 times using for loop
for (let i = 0; i < 5; i++) {
    // Ask for student data using prompts
    let studentID = prompt("Enter student ID:");
    let firstName = prompt("Enter first name:");
    let lastName = prompt("Enter last name:");
    let course = prompt("Enter course:");

    // Create an object with student data and push it into the array
    students.push({
        studentID: studentID,
        firstName: firstName,
        lastName: lastName,
        course: course
    });
}

// 3. Sort the array by firstName using while loop
let i = 0;
while (i < students.length - 1) {
    if (students[i].firstName > students[i + 1].firstName) {
        // Swap elements if out of order
        let temp = students[i];
        students[i] = students[i + 1];
        students[i + 1] = temp;
        i = 0; // Start again from the beginning
    } else {
        i++; // Move to the next pair of elements
    }
}

// 4. Sort the array by lastName using for/in loop
let sortedStudentsByLastName = [];

// Using for/in loop to iterate over the indices of students array
for (let i in students) {
    // Fetching the student object at the current index
    let student = students[i];
    // Pushing the student object into sortedStudentsByLastName array
    sortedStudentsByLastName.push(student);
}

// Sorting the sortedStudentsByLastName array based on lastName
sortedStudentsByLastName.sort((a, b) => a.lastName.localeCompare(b.lastName));

// 5. Sort the array by studentID using do/while loop
let j = 0;
do {
    let swapped = false;
    for (let i = 0; i < students.length - 1; i++) {
        if (students[i].studentID > students[i + 1].studentID) {
            // Swap elements if out of order
            let temp = students[i];
            students[i] = students[i + 1];
            students[i + 1] = temp;
            swapped = true;
        }
    }
    if (!swapped) {
        break; // Array is sorted, exit the loop
    }
    j++;
} while (j < students.length);

// Log the sorted arrays to the console
console.log("Sorted by firstName:", students);
console.log("Sorted by lastName:", sortedStudentsByLastName);
console.log("Sorted by studentID:", students);