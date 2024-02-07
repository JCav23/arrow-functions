let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let totalScore = 0;
    let studentCount = 0;
    for (let student in arr){
        if (students[student].subjects.includes(subject)){
            totalScore += students[student].results[subject];
            studentCount += 1;
        }
    }
    return totalScore / studentCount;
};

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);

// for (let student in students){
//     console.log(student);
// }