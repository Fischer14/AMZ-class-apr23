// Herencia #1
// Crea una clase llamada Car con las propiedades make y year, cuyos valores se pasan como argumentos en el constructor. La clase debe tener un método llamado getDescription que devuelve una cadena en el siguiente formato: “This is a(n) <make> car from <year>.” (“Este es un coche <make> del año <year>.”).

class Car {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getDescription() {
        return `This is a(n) ${this.make} car from ${this.year}.`;
    } 
  }
  
  const myCar = new Car("Audi", 2019);
  console.log(myCar.getDescription()); // "This is a(n) Audi car from 2019."

// Herencia #2
// Crea una clase Person con las propiedades name, age, and gender(nombre, edad y género) cuyos valores se toman como argumentos en el constructor.
// La clase debe tener los métodos getName(), getAge() y getGender() que devuelven las propiedades respectivas.
// A continuación, crea una nueva clase Student que herede de la clase Person y tenga una propiedad adicional studentId.
// La clase debe tener un método getStudentId() que devuelva el id del estudiante.

class person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender =gender; 
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getGender() {
        return this.gender;
    }
}

class student extends person {
    constructor(name, age, gender, studentId) {
        super(name, age, gender);
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
    }
}

let student1 = new student ("Romy", 27, "female", 140296)
console.log(student);

console.log(student1.getName())
console.log(student1.getAge())
console.log(student1.getGender())
console.log(student1.getStudentId())