
type Grades = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined

type Student = {
    firstName: string
    lastName: string
    age: number
    grades: Grades[]
}

function showStudentInfos(student: Student): void {
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")")
    console.log("=================")

    const newGrades = student.grades.map(grade => {
        if(grade === undefined) {
            return "*"
        } else {
            return grade
        }
    })

    console.log("Noten: " + newGrades)
}

const me: Student = {
    firstName: "Anne",
    lastName: "Hensel",
    age: 29,
    grades: ["A", 1, "D", undefined, 3]
}

const tina: Student = {
    firstName: "Tina",
    lastName: "Müller",
    age: 35,
    grades: [2, "F", undefined, 3, "A"]
}

const mario: Student = {
    firstName: "Mario",
    lastName: "Kart",
    age: 99,
    grades: [1, undefined, "D", 1, "B"]
}


showStudentInfos(me)

