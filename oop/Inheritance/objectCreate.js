//Parent Object
const Person = {
    set name(name) {
        this._name = name;
    },
    get name() {
        return this._name;
    },
    set birthYear(birthYear) {
        this._birthYear = birthYear;
    },
    get birthYear() {
        return this._birthYear;
    },
    init(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    },
    calcAge() {
        return 2024 - this.birthYear;
    },
};

//making a empty object which will refer to Parent's prototype
//child class
const Student = Object.create(Person);

//initializing child class
Student.init = function(name,birthYear,location,course) {
    Person.init.call(this,name,birthYear);//calling parent's method and this refers to the child object
    this.location = location;
    this.course = course;
};

//creating object of child class
const jay = Object.create(Student);
jay.init('Jay',1990,'Mohali','Fashion Designing');
console.log(jay.name);
console.log(jay.calcAge());