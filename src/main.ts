type Grades = {
    math: number | string | undefined
    english: number | string | undefined
    german: number | string | undefined
    biology?: number | string | undefined
    art: number | string | undefined
}

type Student = {
    firstName: string
    lastName: string
    age: string
    grades: Grades
}

type StudentAttributes = (firstName: string, lastName: string, age: string, grades: Grades) => string
const student1: StudentAttributes = (firstName, lastName, age, grades) => firstName + " " + lastName + " " + age + "\n====================\nNoten: " + {grades}

const me: Student = {
    firstName: "Anne",
    lastName: "Hensel",
    age: "(29)",
    grades: {
        math: 'A',
        english: 1,
        german: 'D',
        biology: '*',
        art: 3
    }
}


console.log(me)
console.log(me.firstName + " " + me.lastName + " " + me.age + "\n====================\nNoten: " + me.grades.math + "," + me.grades.english + "," + me.grades.german + "," + me.grades.biology + ","+ me.grades.art)

