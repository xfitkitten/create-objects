class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.classes = ["setp-2021"]
    this.grade = 100
  }

  deductGrade(score) {
    this.grade -= score
  }

  addGrade(score) {
    this.grade += score
  }

  addCourse(course) {
    this.classes.push(course)
  }

  withdraw(course) {
    this.classes = this.classes.filter(e => e !== course)
  }

  display() {
    return `${this.name} is a ${this.age} year old student who is currently enrolled in ${this.classes.length} classes and currently has a gead of ${this.grade}`
  }
}

let student1 = new Student("James", 45);
let student2 = new Student("Janet", 35);
let student3 = new Student("Jeff", 25);

console.log(student1)
console.log(student2)
console.log(student3)

student3.addCourse("docker01")
student3.addCourse("database01")
student3.addCourse("english02")
student3.addCourse("badmitten999")

console.log(student3)

console.log(student3.classes)

student1.addCourse("english02")
student1.addCourse("woodshop02")
student2.addCourse("english02")
student2.addCourse("woodshop02")

console.log(student1)
console.log(student2)

student3.deductGrade(40)
console.log(student3.grade)

console.log(student3.classes)
student3.withdraw("english02")
console.log(student3.classes)

student3.withdraw("database01")
console.log(student3.classes)

student3.addGrade(15)
console.log(student3.grade)

student2.addGrade(15)
console.log(student2.grade)

console.log(student1.display())
console.log(student2.display())
console.log(student3.display())