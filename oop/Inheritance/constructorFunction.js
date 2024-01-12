//Parent class
const Person = function(name, birthYear){
    this.name = name;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    return 2024 - this.birthYear;
}

//child class
const Student = function(name, birthYear, location, course) {
    Person.call(this,name,birthYear);
    this.location = location;
    this.course = course;
} 

/**
 * prototype linking
 *      to access parent's class method, child class's object should have access to parent's class prototype
 *      we have to manually connect them, using object.create method
 *      so that all the child class's object can access parent's class methods
 */ 
Student.prototype = Object.create(Person.prototype);

//making the student prototype points to student function
Student.prototype.constructor = Student;

Student.prototype.introduce = function() {
    console.log(`Hello, My name is ${this.name} I am ${this.calcAge()} years old. I am from ${this.location} and studing ${this.course}`);
}

const vivek = new Student('Vivek Poddar',2002,'Patna','B.Tech ECE');
vivek.introduce();
console.log(vivek.__proto__);