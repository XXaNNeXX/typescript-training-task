
type Grades = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined

type Student = {
    firstName: string
    lastName: string
    age: number
    grades: Grades[]
}

function showStudent(student: Student): void {
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")")
    console.log("=================")
    console.log("Noten: " + student.grades)
}

const me: Student = {
    firstName: "Anne",
    lastName: "Hensel",
    age: 29,
    grades: ["A", 1, "D", 2, 3]
}

const tina: Student = {
    firstName: "Tina",
    lastName: "Müller",
    age: 35,
    grades: [2, "F", "B", 3, "A"]
}

const mario: Student = {
    firstName: "Mario",
    lastName: "Kart",
    age: 99,
    grades: [1, 6, "D", 1, "B"]
}


showStudent(me)
//console.log(student("Anne", "Hensel", "(29)", { math: "A", english: 1, german: "D", biology:"*", art: 3}))
//console.log(me.firstName + " " + me.lastName + " " + me.age + "\n====================\nNoten: " + me.grades.math + "," + me.grades.english + "," + me.grades.german + "," + me.grades.biology + ","+ me.grades.art)

