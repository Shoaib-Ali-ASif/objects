// Make an array of objects (an array that will have objects) to store the student information and access it as hard-coded.

let studentsInfo = [
  {
    name: "Shoaib",
    age: 19,
    regNo: 4863,
    course: "WebDevelopement",
    favLanguages:
     [
      'html',
      'css',
      'java',
      'c++'
     ],
    marksOfSubjects: {
      english: 60 ,
      urdu: 55 ,
      math: 75 ,
      bio: 70 ,
      physics: 60,
    }

  },
  {
    name: "Taimoor",
    age: 20,
    regNo: 9120,
    course: "zoology",
    favLanguages:
     [
      'turkish',
      'spanish',
      'arabic',
      'pashto'
     ],
    marksOfSubjects: {
      english: 72 ,
      pakStudies: 30,
      math: 40 ,
      bio: 68 ,
      physics: 55,
    }
  },
];
console.log(studentsInfo);
console.log(students[students.length - 1]); 
console.log(students[students.length - 1].age); 
console.log(students[students.length - 1].name);
