//Parent class
class Person {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }

    calcAge(){
        return 2024 - this.birthYear;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

//child class
class Student extends Person{
    constructor(name,birthYear,location,course){
        super(name,birthYear); //using parent's constructor to initialze common paramerthers
        this.location = location;
        this.course = course;
    }

    introduce() {
        console.log(`Hello, My name is ${this.name} I am ${this.calcAge()} years old. I am from ${this.location} and studing ${this.course}`);
    }
    //overriding parent's class method
    calcAge() {
        return 2024 - this.birthYear + 2;
    }
}

const vivek = new Student('Vivek Poddar',2002,'Patna', 'B.Tech ECE');
vivek.introduce()

//using parent's class property by child class's object
vivek.name = 'Vivek Kumar Poddar';
vivek.introduce();
